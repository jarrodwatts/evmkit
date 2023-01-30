import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
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
          <div className={styles.heroRaycastFrame}>
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
      </div>
    </div>
  );
};

export default Home;
