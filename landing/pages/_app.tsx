import Head from "next/head";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BLOCKCHAIN_ID } from "../const/contractAddresses";
import { Nav } from "../components/Nav/Nav";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = BLOCKCHAIN_ID;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EVM Kit</title>
        <meta
          name="description"
          content="A starter kit for building full-stack web3 applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThirdwebProvider
        desiredChainId={activeChainId}
        // TODO: Setup gasless
        authConfig={{
          domain: "example.com",
          authUrl: "/api/auth",
        }}
      >
        <Nav />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
