import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  // Define a fixture to reuse the same setup in every test
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const greeterFactory = await ethers.getContractFactory("Greeter");
    const greeter = await greeterFactory.deploy("Hello world!");

    return { greeter, owner, otherAccount };
  }

  // An example test suite that uses the fixture's values
  describe("Example test suite", function () {
    it("Should deploy with a Hello world! greeting", async function () {
      const { greeter } = await loadFixture(deployFixture);
      expect(await greeter.greet()).to.equal("Hello world!");
    });

    it("Should set a new greeting", async function () {
      const { greeter, otherAccount } = await loadFixture(deployFixture);
      await greeter.connect(otherAccount).setGreeting("Hola mundo!");
      expect(await greeter.greet()).to.equal("Hola mundo!");
    });
  });
});
