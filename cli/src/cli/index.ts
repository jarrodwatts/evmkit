#!/usr/bin/env node
import { cliVersion } from "../constants/urls";
import { logger } from "../core/helpers/logger";
import { twCreate } from "../create/command";
import { Command } from "commander";

const main = async () => {
  const program = new Command();

  // yes this has to look like this, eliminates whitespace
  console.info(`
███████╗██╗░░░██╗███╗░░░███╗ ██╗░░██╗██╗████████╗
██╔════╝██║░░░██║████╗░████║ ██║░██╔╝██║╚══██╔══╝
█████╗░░╚██╗░██╔╝██╔████╔██║ █████═╝░██║░░░██║░░░
██╔══╝░░░╚████╔╝░██║╚██╔╝██║ ██╔═██╗░██║░░░██║░░░
███████╗░░╚██╔╝░░██║░╚═╝░██║ ██║░╚██╗██║░░░██║░░░
╚══════╝░░░╚═╝░░░╚═╝░░░░░╚═╝ ╚═╝░░╚═╝╚═╝░░░╚═╝░░░
`);
  console.info(`\n 💎 evmkit v${cliVersion} 💎\n`);

  program
    .name("evmkit")
    .description("Official EVM Kit command line interface")
    .version(cliVersion, "-v, --version");

  program
    .command("create [projectPath]")
    .description("Create a new project with EVM Kit")
    .option(
      "--use-npm",
      "Explicitly tell the CLI to bootstrap the app using npm"
    )
    .option(
      "--use-pnpm",
      "Explicitly tell the CLI to bootstrap the app using pnpm"
    )
    .action(async (path, options) => {
      await twCreate(path, options);
    });

  await program.parseAsync();
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
