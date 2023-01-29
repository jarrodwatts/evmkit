import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Contracts from "../components/DemoComponents/Contracts";
import Auth from "../components/DemoComponents/Auth";
import Storage from "../components/DemoComponents/Storage";
import Events from "../components/DemoComponents/Events";
import SDK from "../components/DemoComponents/SDK";
import Link from "next/link";

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
    <div className="container">
      <main>
        <h1 className={styles.title}>
          Build the future of the decentralized web.
        </h1>
        <p className={styles.caption}>
          EVM Kit is the best way to build a full-stack, type-safe web3 project.
        </p>
        <p className={styles.caption}>
          <b> Recommended:</b> Watch the{" "}
          <Link
            className={styles.link}
            href="https://www.youtube.com/TODO"
            target="_blank"
          >
            YouTube video
          </Link>{" "}
          to get started.
        </p>

        <section className={styles.content}>
          <h2 className={styles.subtitle} style={{ marginTop: 64 }}>
            Explore the codebase:
          </h2>

          <p className={styles.caption}>
            Select a tab below to learn more about the codebase and what&apos;s
            possible.
          </p>

          {/* Tabs - todo, shouldn't be divs */}
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <div
                onClick={() => setActiveTab(index)}
                className={`${styles.tab} ${
                  activeTab === tabs.indexOf(tab) ? styles.activeTab : ""
                }`}
                key={tab.title}
              >
                <p>{tab.title}</p>
              </div>
            ))}
          </div>

          {/* Render selected tab component */}
          <div>{activeTab !== null ? tabs[activeTab].component : null}</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
