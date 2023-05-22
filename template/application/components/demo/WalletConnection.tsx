import {
  ConnectWallet,
  ThirdwebProvider,
  coinbaseWallet,
  localWallet,
  magicLink,
  metamaskWallet,
  safeWallet,
  smartWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Checkbox } from "../checkbox";

type Props = {};

const options = {
  "Browser Wallets": [metamaskWallet(), coinbaseWallet(), walletConnect()],
  "Safe Wallets": [safeWallet()],
  "Smart Wallets (ERC4337)": [
    smartWallet({
      gasless: true,
      thirdwebApiKey: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY as string,
      factoryAddress: process.env
        .NEXT_PUBLIC_THIRDWEB_FACTORY_ADDRESS as string,
    }),
  ],
  "Local Wallets": [localWallet()],
  "Email Wallets": [
    magicLink({
      apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    }),
  ],
};

export default function WalletConnection({}: Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Browser Wallets",
  ]);

  return (
    <div className="mb-4 flex flex-col items-start flex-wrap">
      <p className="text-sm text-muted-foreground">
        1. Select connection options:
      </p>
      <div className="flex flex-row items-center gap-4 pt-4 pb-4 w-full mb-4 flex-wrap">
        {Object.keys(options).map((option) => (
          <div key={option} className="flex gap-x-2 items-center ">
            <Checkbox
              id="terms"
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedOptions([...selectedOptions, option]);
                } else {
                  setSelectedOptions(
                    selectedOptions.filter((o) => o !== option)
                  );
                }
              }}
              checked={selectedOptions.includes(option)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground pb-2">2. View the result:</p>

      <ThirdwebProvider
        supportedWallets={
          selectedOptions.length === 0
            ? options["Browser Wallets"]
            : [
                // For each selected option, spread the array of wallets into the supportedWallets array
                ...selectedOptions
                  .map((option) => options[option as keyof typeof options])
                  .flat(),
              ]
        }
      >
        <ConnectWallet />
      </ThirdwebProvider>
    </div>
  );
}
