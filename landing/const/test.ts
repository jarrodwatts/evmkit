import { ExtractAbiFunctions } from "abitype";
import { ethers } from "ethers";

class SmartContract {
  abi: ethers.ContractInterface;

  constructor(abi: ethers.ContractInterface) {
    this.abi = abi;
  }

  wtf() {
    const erc721Abi = this.abi;
    type Result = ExtractAbiFunctions<typeof erc721Abi, "payable">;
  }

  call(
    name: typeof this.abi[number]["inputs"][0]["name"],
    params: typeof this.abi[number]["inputs"][0]["type"][]
  ) {
    // do something
  }
}
