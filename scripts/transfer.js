const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x898Ed94F8821296d60441781b9D55DC2969aF678";
  const receiverAddress = "0xfb2E423f2d2A519FD94d06c86Cd0E2096459B7Bc";
  const quantity = 2;
  const value = ethers.parseEther("0.03");
  const baseURI =
    "https://plum-important-stork-68.mypinata.cloud/ipfs/QmPwaVQLJYyoSttL6ACipXyJQ7WxVqLSrdM8w3i2Mt1SL3/";

  const batchNFTs = await ethers.getContractAt("myNFTs", contractAddress);

  await batchNFTs.setBaseURI(baseURI);
  const mintTokens = await batchNFTs.mint(receiverAddress, quantity, {
    value: value,
  });

  console.log(
    `Transaction Hash: https://sepolia.etherscan.io/tx/${mintTokens.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
