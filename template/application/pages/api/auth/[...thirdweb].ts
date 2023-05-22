import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { EthersWallet, PrivateKeyWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  // Use the domain from the environment or default to evmkit.com
  domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "evmkit.com",

  // Use the private key from the environment or generate a random one
  wallet: process.env.THIRDWEB_AUTH_PRIVATE_KEY
    ? new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY)
    : new EthersWallet(ethers.Wallet.createRandom()),
});

export default ThirdwebAuthHandler();
