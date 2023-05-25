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
                applications on any EVM-compatible chain.
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
                  href="https://demo.evmkit.com/"
                  target="_blank"
                >
                  View Demo
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://docs.evmkit.com/"
                  target="_blank"
                >
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.carouselSection}>
          <h2 className={styles.sectionTitle}>
            Compatible with{" "}
            <em>
              <u>all</u>
            </em>{" "}
            EVM Chains
          </h2>
          <p className={styles.sectionDescription}>
            Deploy your smart contracts to any EVM-compatible network with a
            single command. <b>No private keys required</b>.{" "}
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
              ABIs using
              <Link
                href="https://github.com/wagmi-dev/abitype"
                target="_blank"
                className={styles.link}
              >
                ABIType.
              </Link>
            </p>
            <p className={styles.sectionDescription}>
              From smart contracts to the frontend, your IDE will help guide you
              through the entire development process.
            </p>
          </div>
          <div className={styles.sectionRight}>
            <Image
              src="/generate-preview.gif"
              width={820}
              height={246}
              alt="yarn generate preview gif"
              className={styles.sectionImage}
            />
            <p className={styles.imageCaption}>
              Demo: <span className={styles.code}>yarn generate</span> provides
              type-safety when interacting with your smart contracts.
            </p>
          </div>
        </div>

        <div
          className={`${styles.section} ${styles.reverse}`}
          style={{ justifyContent: "center", alignItems: "center", gap: 32 }}
        >
          <div className={styles.sectionRight}>
            <h2 className={styles.sectionTitle}>Batteries Included</h2>
            <p className={styles.sectionDescription}>
              Web3 infrastructure is provided out of the box:
            </p>
            <ul className={styles.featureList}>
              <li className={`${styles.sectionDescription} ${styles.listItem}`}>
                RPC endpoints for all supported chains
              </li>
              <li className={`${styles.sectionDescription} ${styles.listItem}`}>
                IPFS upload, pinning and gateway services
              </li>
              <li className={`${styles.sectionDescription} ${styles.listItem}`}>
                Account abstraction bundlers and paymasters
              </li>
            </ul>
          </div>
          <div className={styles.sectionLeft}>
            <Image
              src="/hero-image.webp"
              width={420}
              height={320}
              alt="yarn generate preview gif"
              className={styles.sectionImage}
              style={{
                // flip
                transform: "scaleX(-1)",
              }}
            />
          </div>
        </div>

        <div className={styles.carouselSection}>
          <h2 className={styles.sectionTitle}>Modern Frontend Tooling</h2>
          <p className={styles.sectionDescription}>
            Built for performance and developer experience.
          </p>

          <div className={styles.toolsContainer}>
            {[
              {
                name: "Next.js",
                description: "A modern full-stack framework for React ",
                image: "tools/nextjs.png",
              },
              {
                name: "shadcdn/ui & Tailwind CSS",
                description:
                  "Beautifully designed accessible tailwind components",
                image: "tools/tailwind.png",
              },
              {
                name: "thirdweb",
                description: "A performant web3 development framework",
                image: "tools/thirdweb.png",
              },
            ].map((tool) => {
              return (
                <div className={styles.toolContainer} key={tool.name}>
                  <Image
                    src={`/${tool.image}`}
                    width={96}
                    height={tool.name === "thirdweb" ? 64 : 96}
                    alt={tool.name}
                    className={styles.toolImage}
                    style={
                      tool.name === "thirdweb"
                        ? {
                            marginBottom: 24,
                          }
                        : {}
                    }
                  />
                  <h3 className={styles.toolName}>{tool.name}</h3>
                  <p className={styles.toolDescription}>{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.carouselSection}>
          <h2 className={styles.sectionTitle}>Join the Community</h2>
          <p className={styles.sectionDescription}>
            You&rsquo; are not alone in this journey. Join the community to get
            help, share your projects, and meet other developers.
          </p>
          <div className={styles.communityContainer}>
            <Link
              href="https://github.com/jarrodwatts/evmkit"
              target="_blank"
              className={styles.link}
            >
              <Image
                src="/github.png"
                width={48}
                height={48}
                alt="Github icon"
              />
            </Link>
            <Link
              href="https://twitter.com/jarrodwattsdev"
              target="_blank"
              className={styles.link}
            >
              <Image
                src="/twitter.png"
                width={36}
                height={36}
                alt="Twitter icon"
              />
            </Link>
            <Link
              href="https://discord.com/invite/4eQBm7DDNS"
              target="_blank"
              className={styles.link}
            >
              <Image
                src="/discord.png"
                width={48}
                height={48}
                alt="Discord icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
