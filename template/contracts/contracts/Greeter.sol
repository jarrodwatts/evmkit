// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// thirdweb ContractKit - Building blocks for common smart contract patterns (some examples below)
import "@thirdweb-dev/contracts/base/ERC721Base.sol"; // Base contracts
import "@thirdweb-dev/contracts/extension/Permissions.sol"; // Extension contracts

// OpenZeppelin Contracts - More building blocks and utility functions (some examples below)
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Greeter {
    // Internal state to the contract
    string private greeting;

    // Constructor - run when contract is deployed
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Read function (can be called without a transaction)
    function greet() public view returns (string memory) {
        return greeting;
    }

    // Write function (requires a transaction to be called)
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;

        emit GreetingChanged(_greeting);
    }

    event GreetingChanged(string newGreeting);
}
