import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { EthersWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "evmkit.com",
  wallet: new EthersWallet(ethers.Wallet.createRandom()),
});

export default ThirdwebAuthHandler();
