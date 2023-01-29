import React from "react";
import Link from "next/link";
import styles from "./Demo.module.css";
import contractAddresses from "../../const/contractAddresses";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";

export default function SDK() {
  const { contract, isLoading } = useContract(
    contractAddresses.greeter.address,
    contractAddresses.greeter.abi
  );

  const { data: greeting, isLoading: isGreetingLoading } = useContractRead(
    contract,
    "greet"
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interact with smart contracts</h3>

      <p className={styles.caption}>
        Code in the <code className={styles.code}>/application</code> directory
        uses React hooks to connect to and interact with a smart contract using
        the{" "}
        <Link
          className={styles.link}
          target="_blank"
          href="https://www.thirdweb.com"
        >
          thirdweb React SDK
        </Link>
        .
      </p>

      <br />

      <p className={styles.caption}>
        <b>Connected to contract address</b>:{" "}
        {isLoading ? "Loading..." : contract?.getAddress()}
      </p>

      <p className={styles.caption}>
        <b>Current contract greeting value</b>:{" "}
        {isGreetingLoading ? "Loading..." : greeting}
      </p>

      <br />

      <p className={styles.caption}>
        The button below ensures you&rsquo;re connected to the right network and
        then calls the <code className={styles.code}>setGreeting</code>{" "}
        function.
      </p>

      <Web3Button
        contractAddress={contractAddresses.greeter.address}
        contractAbi={contractAddresses.greeter.abi}
        action={(contract) =>
          contract.call(
            "setGreeting",
            Math.floor(Math.random() * 1000).toString()
          )
        }
        className={styles.buttonContainer}
      >
        Set Greeting to random number
      </Web3Button>

      <p className={styles.caption}>
        <i>
          <b>Hint:</b> Notice the value of the greeting changes after your
          transaction is confirmed! Reads are automatically re-run when your
          transaction is confirmed.
        </i>
      </p>
    </div>
  );
}
