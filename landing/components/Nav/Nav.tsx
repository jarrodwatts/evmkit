import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image src="/logo.png" width={42} height={42} alt="EVM Kit Logo" />
          </Link>

          <div className={styles.navMiddle}>
            <Link
              href="https://docs.evmkit.com/"
              target="_blank"
              className={styles.link}
            >
              Docs
            </Link>
            <Link
              href="https://demo.evmkit.com/"
              target="_blank"
              className={styles.link}
            >
              Demo
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <Link
            href="https://github.com/jarrodwatts/evmkit"
            target="_blank"
            className={styles.link}
          >
            <Image src="/github.png" width={24} height={24} alt="Github icon" />
          </Link>
          <Link
            href="https://twitter.com/jarrodwattsdev"
            target="_blank"
            className={styles.link}
          >
            <Image
              src="/twitter.png"
              width={24}
              height={24}
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
              width={24}
              height={24}
              alt="Discord icon"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
