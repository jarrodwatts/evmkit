import React from "react";
import Link from "next/link";
import styles from "./Demo.module.css";
import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";

export default function Storage() {
  // TODO: Allow user to upload stuff
  const { mutateAsync: upload } = useStorageUpload();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Upload & download files from IPFS and render them on the UI
      </h3>

      <p className={styles.caption}>
        Code in the <code className={styles.code}>/application</code> directory
        uses{" "}
        <Link
          className={styles.link}
          target="_blank"
          href="https://portal.thirdweb.com/storage"
        >
          thirdweb Storage
        </Link>{" "}
        to upload to and download files from IPFS.
      </p>

      <p className={styles.caption}>
        The React SDK also provides UI components to render them using a
        gateway. The video below is downloaded from an IPFS URI.
      </p>

      <p className={styles.caption}>
        The type of content stored at the URI is determined at run-time and
        rendered accordingly.
      </p>

      <MediaRenderer
        src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
        alt="A mp4 video"
        className={styles.buttonContainer}
      />
    </div>
  );
}
