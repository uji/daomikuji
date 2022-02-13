import { expect } from "chai";
import { ethers } from "hardhat";

const deployOmikuji = async () => {
  const Omikuji = await ethers.getContractFactory("Omikuji");
  const omikuji = await Omikuji.deploy("DAOmikuji", "DMKJ");
  await omikuji.deployed();
  return omikuji;
};

describe("Omikuji", function () {
  it("Should be able to mint NFT", async function () {
    const omikuji = await deployOmikuji();

    const [account] = await ethers.getSigners();
    const addr = account.address;

    const beforeBalance = await omikuji.balanceOf(addr);

    const tx = await omikuji.mint(addr, "test");
    await tx.wait();

    const afterBalance = await omikuji.balanceOf(addr);
    expect(afterBalance - beforeBalance).equal(1);
  });
});
