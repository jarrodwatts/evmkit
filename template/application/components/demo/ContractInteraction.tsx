import {
  Web3Button,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { greeter } from "../../const/contracts";
import { useState } from "react";

export default function ContractInteraction() {
  const [newValue, setNewValue] = useState<string>("");

  const { contract } = useContract(greeter);
  const { data, isLoading: loadingGreeting } = useContractRead(
    contract,
    "greet"
  ); // Type-safe view name
  const { mutateAsync: setGreeting, isLoading: settingGreeting } =
    useContractWrite(contract, "setGreeting"); // Type-safe function name and args

  return (
    <div className="mb-4 flex flex-col items-start flex-wrap">
      <div className="flex flex-col mx-2 w-full lg:flex-row">
        <div className="flex flex-col items-center justify-start p-4 mx-2 lg:w-1/2">
          <p className="text-sm text-muted-foreground mb-2">
            1. Read data from contract
          </p>

          <p className="text-sm text-white mb-2">Current Greeting: </p>
          <p className="font-bold text-xl">
            {loadingGreeting ? "Loading..." : data}
          </p>
        </div>

        <div className="flex flex-col items-center justify-start p-4 mx-2 lg:w-1/2">
          <p className="text-sm text-muted-foreground mb-2">
            2. Write data to contract
          </p>

          <input
            className="w-1/2 mb-2 p-2 rounded-md bg-gray-800 text-white"
            placeholder="New Greeting"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />

          <Web3Button
            contractAddress={greeter}
            action={async () =>
              setGreeting({
                args: [newValue],
              })
            }
            className="w-full"
          >
            Set Greeting
          </Web3Button>
        </div>
      </div>
    </div>
  );
}
