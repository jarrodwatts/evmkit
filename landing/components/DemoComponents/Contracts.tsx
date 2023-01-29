import React from "react";
import Link from "next/link";
import styles from "./Demo.module.css";

export default function Contracts() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Build & Deploy Smart Contracts</h3>

      <p className={styles.caption}>
        Inside the <code className={styles.code}>/contracts</code> directory,
        you&rsquo;ll find the tools to build and deploy your smart contracts,
        including:
      </p>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <code className={styles.code}>contracts/Greeter.sol</code>: A simple
          smart contract containing a view, function, and event.
        </li>
        <li className={styles.listItem}>
          <code className={styles.code}>test/Greeter.ts</code>: A test suite for
          the contracts written with Hardhat.
        </li>

        <li className={styles.listItem}>
          <code className={styles.code}>scripts/deploy.ts</code>: A script to
          deploy your smart contracts to the local Hardhat node and update your
          frontend with the contract address + ABI.
        </li>
      </ul>

      <p className={styles.caption}>
        From within the <code className={styles.code}>/contracts</code>{" "}
        directory, you can run the following commands:
      </p>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <code className={styles.code}>yarn test</code>: Run the smart contract
          test suite.
        </li>
        <li className={styles.listItem}>
          <code className={styles.code}>yarn run-node</code>: Run the local
          hardhat node.
        </li>
        <li className={styles.listItem}>
          <code className={styles.code}>yarn deploy-local</code>: Deploy your
          smart contracts to the local hardhat node{" "}
          <i>
            (requires <code className={styles.code}>yarn run-node</code>to be
            running)
          </i>
          <ul className={styles.nestedList}>
            <li className={styles.listItem}>
              Automatically updates your frontend with the new smart contract
              addresses + ABIs.
            </li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <code className={styles.code}>yarn deploy</code>: Deploy your smart
          contracts to any EVM compatible network using the{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.thirdweb.com"
          >
            thirdweb dashboard
          </Link>
          <ul className={styles.nestedList}>
            <li className={styles.listItem}>No private keys required!</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
