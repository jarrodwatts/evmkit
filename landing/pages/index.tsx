import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [icon, setIcon] = useState("/copy-icon.png");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx evmkit create my-evmkit-app");
    setIcon("/check-icon.png");
    setTimeout(() => {
      setIcon("/copy-icon.png");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hi.png"
                width={1390}
                height={1390}
                alt="Background gradient"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/wtf.png"
              width={819}
              height={430}
              alt="EVM Kit Example asset"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Build web3 apps
                </span>
                <br />
                faster than ever
              </h1>
              <p className={styles.heroSubtitle}>
                EVM Kit is the best way to build full-stack, type-safe web3
                applications on any EVM-compatible network.
              </p>
              <button className={styles.codeButton} onClick={copyToClipboard}>
                <p>npx evmkit create my-evmkit-app</p>
                <Image
                  src={icon}
                  alt="Copy"
                  height={16}
                  width={16}
                  className={styles.codeButtonCopy}
                />
              </button>

              <div className={styles.heroCtaContainer}>
                {/* Button in the style of code */}
                <Link
                  className={styles.heroCta}
                  href="https://docs.evmkit.com/"
                  target="_blank"
                >
                  View Documentation
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/jarrodwatts/evmkit"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carouselSection}>
          <h2 className={styles.sectionTitle}>
            Compatible with all EVM Networks
          </h2>
          <p className={styles.sectionDescription}>
            Deploy your smart contracts to any EVM-compatible network with a
            single command. <b>No private keys required</b>.{" "}
            <em>Literally, just type 11 characters...</em>
          </p>
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {[
                "ethereum",
                "polygon",
                "arbitrum",
                "optimism",
                "avax",
                "fantom",
                "binance",
                "celo",
                "zksync",
                "cronos",
                "filecoin",
                "klaytn",
                "evmos",
                "dogechain",
              ].map((chain) => {
                return (
                  <div className={styles.slide} key={chain}>
                    <Image
                      src={`/chains/${chain}.png`}
                      height={96}
                      width={96}
                      alt={chain}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            <h2 className={styles.sectionTitle}>Typesafe End-to-end</h2>
            <p className={styles.sectionDescription}>
              EVM Kit uses TypeScript across the stack to provide a seamless
              developer experience. It infers types from your smart contract
              ABIs to provide typesafety, powered by
              <Link
                href="https://github.com/wagmi-dev/abitype"
                target="_blank"
                className={styles.link}
              >
                ABIType
              </Link>
              . <em>Pretty cool right?</em>
            </p>
            <p className={styles.sectionDescription}>
              From the smart contract environment to the frontend, you can be
              confident that your code is <s>poggers</s>,{" "}
              <em>ahem, typesafe</em>.
            </p>
          </div>
          <div className={styles.sectionRight}>
            <Image
              src="/deploy-local-preview.gif"
              width={720}
              height={246}
              alt="deploy local preview gif"
              className={styles.sectionImage}
            />
            <p className={styles.imageCaption}>
              <span className={styles.code}>yarn deploy-local</span>{" "}
              automatically adds your ABIs to your frontend config.
            </p>
          </div>
        </div>

        <div className={styles.carouselSection}>
          <h2 className={styles.sectionTitle}>The best tools in web3</h2>
          <p className={styles.sectionDescription}>
            Start with the foundation.
          </p>

          <div className={styles.toolImageContainer}>
            {["solidity", "hardhat", "openzeppelin", "thirdweb", "nextjs"].map(
              (tool) => {
                return (
                  <Image
                    src={`/tools/${tool}.png`}
                    height={tool === "thirdweb" ? 64 : 96}
                    width={96}
                    alt={tool}
                    key={tool}
                  />
                );
              }
            )}
          </div>

          <p className={styles.sectionDescription}>
            Add what you need, when you need it.
          </p>
          <div className={styles.toolImageContainer}>
            {["wagmi", "rainbowkit", "alchemy", "tailwind"].map((tool) => (
              <Image
                src={`/tools/${tool}.png`}
                height={96}
                width={tool === "wagmi" ? 136 : 96}
                alt={tool}
                key={tool}
                className={styles.toolImage}
              />
            ))}
          </div>
          <div className={styles.toolImageContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
