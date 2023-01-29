import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Contracts from "../components/DemoComponents/Contracts";
import Auth from "../components/DemoComponents/Auth";
import Storage from "../components/DemoComponents/Storage";
import Events from "../components/DemoComponents/Events";
import SDK from "../components/DemoComponents/SDK";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const tabs = [
    {
      title: "Build & Deploy Smart Contracts to EVM",
      component: <Contracts />,
    },
    {
      title: "Interact with Smart Contracts in React",
      component: <SDK />,
    },
    {
      title: "Sign in with Ethereum to authenticate users",
      component: <Auth />,
    },
    {
      title: "Network with and render IPFS data",
      component: <Storage />,
    },
    {
      title: "Listen for contract events in real time",
      component: <Events />,
    },
  ];

  const [activeTab, setActiveTab] = useState<number | null>(null);

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
                EVM Kit is the best way to build full-stack web3 applications on
                any EVM network.
              </p>
              <div className={styles.heroCtaContainer}>
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
