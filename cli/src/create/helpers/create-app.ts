/* eslint-disable import/no-extraneous-dependencies */
import type { PackageManager } from "./get-pkg-manager";
import { tryGitInit } from "./git";
import { install } from "./install";
import { isFolderEmpty } from "./is-folder-empty";
import { getOnline } from "./is-online";
import { isWriteable } from "./is-writeable";
import { makeDir } from "./make-dir";
import { downloadAndExtractRepo } from "./templates";
import retry from "async-retry";
import chalk from "chalk";
import path from "path";

export class DownloadError extends Error {}

export async function createApp({
  appPath,
  packageManager,
}: {
  appPath: string;
  packageManager: PackageManager;
}): Promise<void> {
  const root = path.resolve(appPath);

  if (!(await isWriteable(path.dirname(root)))) {
    console.error(
      "The application path is not writable, please check folder permissions and try again."
    );
    console.error(
      "It is likely you do not have write permissions for this folder."
    );
    process.exit(1);
  }

  const appName = path.basename(root);

  await makeDir(root);
  if (!isFolderEmpty(root, appName)) {
    process.exit(1);
  }

  const useYarn = packageManager === "yarn";
  const isOnline = !useYarn || (await getOnline());
  const originalDirectory = process.cwd();

  console.log(`Creating a new EVM Kit project in ${chalk.green(root)}.`);
  console.log();

  process.chdir(root);

  function isErrorLike(err: unknown): err is { message: string } {
    return (
      typeof err === "object" &&
      err !== null &&
      typeof (err as { message?: unknown }).message === "string"
    );
  }

  try {
    console.log(`Downloading files from repo. This might take a moment.`);
    await retry(
      () => downloadAndExtractRepo(root, { name: "evmkit", filePath: "" }),
      {
        retries: 3,
      }
    );
  } catch (reason) {
    throw new DownloadError(
      isErrorLike(reason) ? reason.message : String(reason)
    );
  }

  console.log("Installing packages. This might take a couple of minutes.");
  console.log();

  await install(root, null, { packageManager, isOnline });
  console.log();

  if (tryGitInit(root)) {
    console.log("Initialized a git repository.");
    console.log();
  }

  let cdpath: string;
  if (path.join(originalDirectory, appName) === appPath) {
    cdpath = appName;
  } else {
    cdpath = appPath;
  }

  console.log(`${chalk.green("Success!")} Created ${appName} at ${appPath}`);
  console.log("We suggest that you begin by typing:");
  console.log();
  console.log(chalk.cyan("  cd"), cdpath);
  console.log();
}
