import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/button";
import WalletConnection from "@/components/demo/WalletConnection";
import UserAuthentication from "@/components/demo/UserAuthentication";

const tabs = [
  { name: "Wallet Connection", component: <WalletConnection /> },
  { name: "Contract Interaction", component: null },
  { name: "User Authentication", component: <UserAuthentication /> },
  { name: "Decentralized Storage", component: null },
  { name: "Realtime Events", component: null },
];

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        EVM Kit
      </h1>
      <p className="text-xl text-muted-foreground">
        A collection of tools for Ethereum Virtual Machine (EVM) development.
      </p>
      <div className="flex flex-row items-center gap-4 pt-6 pb-16 border-b">
        <Link
          className={buttonVariants({ variant: "default" })}
          href="https://docs.evmkit.com"
          target="_blank"
        >
          Get Started
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="https://github.com/jarrodwatts/evmkit"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors mt-8">
        What&rsquo;s Included?
      </h2>
      <p className="leading-7 mt-2">
        Explore the available features of EVM Kit below.
      </p>

      <div className="flex flex-row pt-6 ">
        <div className="mb-4 flex flex-col items-start mt-4 flex-wrap w-60">
          {tabs.map((tab) => (
            <button
              className={`text-left pl-3  py-2 flex items-center pr-6 font-medium transition-colors duration-200 ${
                tab.name === activeTab.name
                  ? "font-bold text-white border-l-2 border-blue-500"
                  : "text-gray-400 border-l-2 border-gray-700"
              } hover:text-white`}
              key={tab.name}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="border border-gray-700 rounded-lg flex-1 p-8 m-l-3">
          {activeTab.component}
        </div>
      </div>
    </div>
  );
};

export default Home;
