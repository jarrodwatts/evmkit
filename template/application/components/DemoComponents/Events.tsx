import React from "react";
import Link from "next/link";
import styles from "./Demo.module.css";
import {
  useContract,
  useContractEvents,
  Web3Button,
} from "@thirdweb-dev/react";
import contractAddresses from "../../const/contractAddresses";

export default function Events() {
  const { contract } = useContract(
    contractAddresses.greeter.address,
    contractAddresses.greeter.abi
  );

  const { data: events, isLoading } = useContractEvents(contract);

  console.log(events);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Listen to smart contract events in real-time
      </h3>

      <p className={styles.caption}>
        Code in the <code className={styles.code}>/application</code> directory
        uses React hooks to listen to events emitted by any smart contract using
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

      {isLoading ? (
        "Loading events..."
      ) : (
        <div className={styles.eventContainer}>
          {events?.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div>
                <p>
                  <b>Event Name: </b>
                </p>
                <p>{event.eventName}</p>
              </div>

              <div>
                <p>
                  <b>Event Value: </b>
                </p>
                <p>{event.data["newGreeting"]}</p>
              </div>

              <div>
                <p>
                  <b>Transaction ID: </b>
                </p>
                <p>{event.transaction.address}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className={styles.caption}>
        Emit a new event by clicking the button below.
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
        Create a new event
      </Web3Button>
    </div>
  );
}
