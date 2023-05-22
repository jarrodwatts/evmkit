// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

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
