import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={"/cross.png"} alt="EVM Kit logo" height={64} width={64} />
      <p style={{ marginLeft: 8, fontWeight: 600 }}>EVM Kit</p>
    </div>
  ),
  project: {
    link: "https://github.com/jarrodwatts/evmkit",
  },
  chat: {
    link: "https://discord.com/invite/4eQBm7DDNS",
  },
  docsRepositoryBase: "https://github.com/jarrodwatts/evmkit-docs",
  footer: {
    text: "EVM Kit Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – EVM Kit Docs",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        <meta property="og:url" content={`https://evmkit.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "EVM Kit"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Documentation for EVM Kit - the best way to build full-stack web3 apps"
          }
        />
      </>
    );
  },
};

export default config;
