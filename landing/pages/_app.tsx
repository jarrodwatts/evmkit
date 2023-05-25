import Head from "next/head";
import type { AppProps } from "next/app";
import { Nav } from "../components/Nav/Nav";
import "../styles/globals.scss";

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

      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
