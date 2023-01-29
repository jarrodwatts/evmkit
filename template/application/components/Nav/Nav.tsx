import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <div>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image src="/logo.png" width={42} height={42} alt="EVM Kit Logo" />
            <p>EVM Kit</p>
          </Link>
        </div>

        <div className={styles.navRight}>
          <div className={styles.connectWalletContainer}>
            <ConnectWallet />
          </div>
        </div>
      </nav>
    </div>
  );
}
