import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import { Example, Example__factory } from "../typechain-types";

chai.use(solidity);
chai.use(chaiAsPromised);

const { expect } = chai;

let example: Example;

beforeEach(async () => {
  const signers = await ethers.getSigners();
  example = await new Example__factory(signers[0]).deploy();
});

describe('Example', () => {
  it('should return 30', async () => {
    const result = await example.add(10, 20);
    expect(result).to.eq(30);
  });
});