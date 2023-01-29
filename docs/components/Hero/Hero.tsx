import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight">
          EVM Kit
        </h1>
        <p className="nx-mt-2 nx-text-lg">
          The best way to build full-stack web3 applications on any{" "}
          <Link
            className={styles.link}
            href="https://ethereum.org/en/developers/docs/evm/"
            target="_blank"
          >
            EVM network
          </Link>
          . Built for developers that value:
        </p>
        <ul className="nx-mt-2 nx-text-lg">
          <li className="nx-flex nx-items-center">
            <span className="nx-mr-2">🔒</span>
            <span>Security</span>
          </li>
          <li className="nx-flex nx-items-center">
            <span className="nx-mr-2">🚀</span>
            <span>Performance</span>
          </li>
          <li className="nx-flex nx-items-center">
            <span className="nx-mr-2">📦</span>
            <span>Flexibility</span>
          </li>
        </ul>

        <div className={styles.btnContainer}>
          <Link
            href="/getting-started"
            className={`${styles.btnHover} ${styles.btnPrimary}`}
          >
            Get Started
          </Link>
          <Link
            href="https://demo.evmkit.com/"
            target="_blank"
            className={`${styles.btnHover} ${styles.btnSecondary}`}
          >
            View Demo
          </Link>
        </div>
      </div>

      <div>
        <Image
          src={"/hero-image.png"}
          alt="EVM Kit Hero"
          height={400}
          width={400}
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}
