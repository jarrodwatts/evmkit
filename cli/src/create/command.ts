#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */
import { DownloadError, createApp } from "./helpers/create-app";
import { getPkgManager } from "./helpers/get-pkg-manager";
import { validateNpmName } from "./helpers/validate-pkg";
import chalk from "chalk";
import path from "path";

let projectPath: string = "";

export async function twCreate(pPath: string = "", options: any) {
  if (typeof pPath === "string") {
    projectPath = pPath;
  }

  // Resolve project path
  projectPath = path.resolve(projectPath);
  const projectName = path.basename(projectPath);

  const { valid, problems } = validateNpmName(projectName);
  if (!valid) {
    console.error(
      `Could not create a project called ${chalk.red(
        `"${projectName}"`
      )} because of npm naming restrictions:`
    );

    problems?.forEach((p) => console.error(`    ${chalk.red.bold("*")} ${p}`));
    process.exit(1);
  }

  const packageManager = !!options.useNpm
    ? "npm"
    : !!options.usePnpm
    ? "pnpm"
    : getPkgManager();

  try {
    await createApp({
      appPath: projectPath,
      packageManager,
    });
  } catch (reason) {
    if (!(reason instanceof DownloadError)) {
      throw reason;
    }
  }
}
