# EVM Kit

The best way to start a full-stack type-safe web3 project.

[Video](https://www.youtube.com/channel/UCJae_agpt9S3qwWNED0KHcQ) coming soon!

## What is this?

A set of opinionated tools and best practices to build a full-stack web3 project.

The stack is built using the following tools:

**Smart Contracts**

- [Solidity](https://docs.soliditylang.org/en/v0.8.11/) - Language for writing smart contracts
- [Hardhat](https://hardhat.org/) - Contract development environment to test and debug smart contracts on a local node
- [TypeChain](https://github.com/dethcrypto/TypeChain) - Generated TypeScript bindings for smart contracts
- [thirdweb ContractKit](https://portal.thirdweb.com/contractkit) - A set of smart contracts for common use cases
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/4.x/) - More utility smart contracts for common use cases

**Frontend**

- [Next.js](https://nextjs.org/) - React framework with powerful features optimized for performance
- Your own choice of UI library (e.g. [Chakra UI](https://chakra-ui.com/), [Material UI](https://material-ui.com/), [Tailwind](https://tailwindcss.com/), etc.)
- [thirdweb React SDK](https://portal.thirdweb.com/react) - React hooks for interacting with wallets, smart contracts, and more

## Get Started

_Please see the [pre-requisites](#pre-requisites) section below for the tools you need to install before getting started._

First, clone this repository:

```bash
npx evmkit@latest create my-evmkit-app
```

Change directories into the project:

```bash
cd evm-kit
```

Open the project in Visual Studio Code.

<br/>

### Install Recommended Extensions

This project comes with my [recommended extensions](/.vscode/extensions.json) for building web3 apps in VS Code.

When you open the project, VS Code will prompt you to install them. It is recommended that you do so.

There is also a [settings file](/.vscode/settings.json) that comes with VS Code configuration that auto-formats your code every time you save.

<br/>

### Add A Burner Wallet Private Key

To authenticate users using Sign in with Ethereum, you need a private key.

**IMPORTANT: Use a burner wallet. NOT your main wallet. The account does not need any funds.**

1. Create a file called `.env.local` at the root of the `application` folder.
2. Populate it like so: `ADMIN_PRIVATE_KEY=xxx`

Please see the [.env.example](/application/.env.example) file if you get stuck.

<br/>

### Set Up Your Terminals

The recommended way to use this repository is to run three terminals simultaneously, like so:

![Terminal Setup](/readme_assets/terminals.png)

**Terminal One**:
Runs your application (front end).
Leave this terminal running during development.

- `cd application`
- `yarn` (only required **once** to install dependencies)
- `yarn dev` (start the application)
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Leave this terminal running.

**Terminal Two**:
Runs your local Hardhat Node.
Leave this terminal running during development.

- `cd contracts`
- `yarn` (only required **once** to install dependencies)
- `yarn run-node` (start the local node)

The local node prints out 20 accounts with private keys. Import one of these accounts to your web browser wallet (e.g. Metamask) to use a wallet with funds.

**Terminal Three**:
Deploys your smart contracts to the local node and updates your frontend.

- `cd contracts`
- `yarn deploy-local` (Runs the [deploy script](/contracts/scripts/deploy.ts))

  Use this terminal for various other commands like `yarn` and `git`.

<br/>

## Going to Production

When you&rsquo;re ready to deploy your smart contracts and [GTFOL](https://www.urbandictionary.com/define.php?term=GTFOL), all you need to do is:

1. Deploy your smart contract(s).
2. Add your contract addresses and network to the [contractAddresses.ts](/application/const/contractAddresses.ts) file.
3. Deploy your application to Vercel.

Further details below:

### Deploying Smart Contracts

From the `contracts` directory, run `yarn deploy` to compile and deploy your smart contracts to any EVM test network or mainnet with the [thirdweb dashboard](https://thirdweb.com/dashboards) flow; no private keys required!

Once deployed, copy each of your smart contract addresses from the dashboard _(outlined below)_:

![Dashboard](/readme_assets/copy-address.png)

### Adding Contract Addresses to Application

Inside the [contractAddresses.ts](/application/const/contractAddresses.ts) file, there is a placeholder for you to put the deployed contract address for each contract you have created.

```diff
export const internalContractAddresses = {
    [DEV_CHAIN_ID]: {
      greeter: {
        "address": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "abi": [{...}]
      }
    },
    [PRODUCTION_CHAIN_ID]: {
      greeter: {
-        "address": "<INSERT PRODUCTION ADDRESS HERE>", // Once you deploy your smart contract to production (such as Mainnet), add the address manually here.
+       "address": "place-production-address-here",
        "abi": [{...}]
      }
    },
  };

```

### Setting Production Network

In the same [contractAddresses.ts](/application/const/contractAddresses.ts) file, ensure you set the production network you want to use.

_For example, if you want to deploy to Ethereum mainnet, change the following lines:_

```diff
- export const PRODUCTION_CHAIN_ID = ChainId.Polygon
+ export const PRODUCTION_CHAIN_ID = ChainId.Mainnet
- export const PRODUCTION_CHAIN_ID_ENUM_NAME = "Polygon";
+ export const PRODUCTION_CHAIN_ID_ENUM_NAME = "Mainnet";
```

### Deploying Application

Use the [Vercel CLI](https://vercel.com/docs/cli) to deploy your application to Vercel.

```bash
cd application
```

Install the Vercel CLI:

```bash
npm i -g vercel
```

Deploy your application:

```bash
vercel
```

The logic inside the [contractAddresses.ts](/application/const/contractAddresses.ts) file automatically uses your production network and contract addresses on your deployed application, while using your development network and contract addresses on your local development environment.

<br/>

## Working with this repository

The general development workflow of this repository is:

1. Set up your terminal windows to run both your application and local node with your smart contracts.
2. Make changes to your smart contracts.
3. Run `yarn deploy-local` in your third terminal to deploy your smart contracts to your local node. This command automatically updates your frontend with the new contract addresses inside the [contractAddresses.ts](/application/const/contractAddresses.ts) file.

4. Work with the latest version of your smart contracts in your application.
5. Repeat steps 2-4 until you are happy with your changes.
6. Run `yarn deploy` to deploy your smart contracts to a test network or mainnet.
7. Update your [contractAddresses.ts](/application/const/contractAddresses.ts) file with the new contract addresses manually.
8. Deploy your application to Vercel.

## Common Issues

- **Nonce too high error with Metamask**: Use [this guide](https://medium.com/@thelasthash/solved-nonce-too-high-error-with-metamask-and-hardhat-adc66f092cd) to reset your test account.

## Prerequisites

In order to use this repository, you will need the following:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)
- A browser wallet (e.g. [Metamask](https://metamask.io/))
