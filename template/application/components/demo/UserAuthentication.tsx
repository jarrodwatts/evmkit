import { ConnectWallet } from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UserAuthentication() {
  // Example function to use user address on server-side function
  const [secret, setSecret] = useState<string>();

  const getSecret = async () => {
    setSecret("Loading...");
    const res = await fetch("/api/secret");
    const data = await res.json();
    setSecret(data.message);
  };

  return (
    <div className="mb-4 flex flex-col items-start flex-wrap">
      <p className="text-sm text-muted-foreground mb-2">
        1. Sign in with your wallet:
      </p>
      <ConnectWallet
        auth={{
          loginOptional: false,
        }}
      />

      <p className="text-sm text-muted-foreground mt-8 mb-2">
        2. Access user wallet information on the server:
      </p>
      <div className="flex flex-col">
        <Button variant="outline" onClick={getSecret} className="w-72 mt-2">
          Get address on server-side function
        </Button>

        <p className="text-sm mt-4">
          Wallet address from server function: {secret || "Not yet requested."}
        </p>
      </div>
    </div>
  );
}
