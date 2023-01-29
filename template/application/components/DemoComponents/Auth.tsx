import React from "react";
import Link from "next/link";
import styles from "./Demo.module.css";
import { ConnectWallet, useUser } from "@thirdweb-dev/react";

export default function Auth() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Authenticate users with the sign in with Ethereum standard
      </h3>

      <p className={styles.caption}>
        Code in the <code className={styles.code}>/application/pages/api</code>{" "}
        directory uses{" "}
        <Link
          className={styles.link}
          target="_blank"
          href="https://portal.thirdweb.com/auth"
        >
          thirdweb Auth
        </Link>{" "}
        and{" "}
        <Link
          className={styles.link}
          target="_blank"
          href="https://nextjs.org/docs/api-routes/introduction"
        >
          Next.js API Routes
        </Link>{" "}
        to prove that users own a wallet from a server-side environment.
      </p>

      <p className={styles.caption}>
        This is useful for token-gating pages, integrating with web2 services,
        or server-side rendering.
      </p>

      <p className={styles.caption}>
        The button below asks you to sign a message with your wallet and
        authenticates you.
      </p>

      <ConnectWallet className={styles.buttonContainer} />

      <p className={styles.caption}>
        <b>Your wallet address:</b> {user?.address || "Not authenticated"}
      </p>
    </div>
  );
}
