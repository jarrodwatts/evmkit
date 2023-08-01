import { promisify } from "util";
import { exec } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { config } from "dotenv";
config();

const execPromise = promisify(exec);

const packageJsonPath = "./package.json";
let packageJsonOriginalContents;

async function runThirdwebGenerate() {
  try {
    // Read the existing package.json content
    const originalPackageJsonContent = readFileSync(packageJsonPath, "utf8");
    packageJsonOriginalContents = JSON.parse(originalPackageJsonContent);

    console.log("Running thirdweb generate...");
    const cmd = `npx --yes thirdweb@latest generate --key "${process.env.THIRDWEB_SECRET_KEY}"`;
    const { stdout, stderr } = await execPromise(cmd);

    if (stdout) {
      console.log(stdout);
      console.log("thirdweb generate completed successfully.");
    }
    if (stderr) {
      console.error(stderr);
    }
  } catch (error) {
    console.error("Failed to execute thirdweb generate. Error below:");
    console.error(error);
  } finally {
    try {
      // Restore the original postinstall script in the package.json
      packageJsonOriginalContents.scripts.postinstall = "node postinstall.mjs";
      writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJsonOriginalContents, null, 2)
      );
      console.log("Overwrote package.json postinstall script successfully.");
    } catch (error) {
      console.error(
        "Failed to update package.json postinstall script. Error below:"
      );
      console.error(error);
    }
  }
}

runThirdwebGenerate();
