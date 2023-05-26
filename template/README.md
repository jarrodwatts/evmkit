This is an [EVM Kit](https://evmkit.com/) project bootstrapped with `npx evmkit create`.

## Getting Started

Open the project in [Visual Studio Code](https://code.visualstudio.com/).
The repository comes with a set of [recommended extensions](https://github.com/jarrodwatts/evmkit/blob/main/template/.vscode/extensions.json)
for building web3 apps; when you open the project, VS Code will prompt you to install them.
For the best IDE experience, it's recommended to install these extensions.

## Installation

The application is split into two directories, `application`, and `contracts`; for the frontend and smart contracts respectively.

The recommended way to use the IDE for this setup is to open a new [split terminal](https://code.visualstudio.com/docs/terminal/basics#:~:text=Multiple%20terminals%20can%20be%20placed,tab%20on%20the%20terminal%20panel.)
inside your VS Code window; one for each directory.
This way, you can work simultaneously on the frontend and smart contracts.

First, install the dependencies for each directory. See the sections below for more information:

1. [application](#application) - setup the frontend application
2. [contracts](#contracts) - setup the smart contracts

### application

```bash
# 1. Change directory to the application folder
cd application

# 2. Install dependencies
yarn

# 3. Start the application
yarn dev
```

### contracts

```bash
# 1. Change directory to the contracts folder
cd contracts

# 2. Install dependencies
yarn

# 3. Build the contracts (optional)
yarn build
```

You'll now be able to view your application at [http://localhost:3000](http://localhost:3000).

## Learn More

To learn more about EVM Kit, take a look at the [documentation](https://docs.evmkit.com/).
