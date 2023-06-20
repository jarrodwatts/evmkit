import type { NextPage } from "next";
import { useState } from "react";
import { buttonVariants } from "@/components/button";
import Link from "next/link";
import WalletConnection from "@/components/demo/WalletConnection";
import UserAuthentication from "@/components/demo/UserAuthentication";
import DecentralizedStorage from "@/components/demo/DecentralizedStorage";
import ContractInteraction from "@/components/demo/ContractInteraction";

const tabs = [
  { name: "Wallet Connection", component: <WalletConnection /> },
  { name: "Contract Interaction", component: <ContractInteraction /> },
  { name: "User Authentication", component: <UserAuthentication /> },
  { name: "Decentralized Storage", component: <DecentralizedStorage /> },
];

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        EVM Kit{" "}
        <span
          className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4
        text-gray-400
        "
        >
          powered by thirdweb
        </span>
      </h1>
      <p className="text-xl text-muted-foreground">
        A collection of tools for Ethereum Virtual Machine (EVM) development.
      </p>
      <div className="flex flex-row items-center gap-4 pt-6 pb-16 ">
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

      <div className="flex flex-col  md:flex-row w-full">
        <div className="flex flex-col items-start justify-start w-full md:w-96 pr-8">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors mt-2">
            What&rsquo;s Included?
          </h2>
          <p className="leading-7 mt-2">
            Explore the features of EVM Kit below.
          </p>

          <div className="mb-4 flex flex-col w-full flex-wrap items-start mt-4 flex-nowrap overflow-x-auto w-full md:w-60  ">
            {tabs.map((tab) => (
              <button
                className={`w-full text-left pl-3 py-2 flex items-center pr-6 border-l-2 font-medium transition-colors duration-200 ${
                  tab.name === activeTab.name
                    ? "font-bold text-white lg:border-l-2 border-blue-500"
                    : "text-gray-400 border-gray-700"
                } hover:text-white`}
                key={tab.name}
                onClick={() => setActiveTab(tab)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        <div
          className="border border-gray-700 rounded-lg flex-1 p-8 m-l-3 mt-4 lg:mt-0
          h-96 overflow-y-auto"
        >
          {activeTab.component}
        </div>
      </div>
    </div>
  );
};

export default Home;
