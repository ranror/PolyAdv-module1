const hre = require("hardhat");

async function main() {
  const latestBlock = await hre.ethers.provider.getBlock("latest");
  //const add100BlocksToCurrent = latestBlock.timestamp + 1000;

  const BatchNFTs = await hre.ethers.getContractFactory("myNFTs");
  const batchNFTs = await BatchNFTs.deploy(latestBlock.timestamp, false);

  await batchNFTs.waitForDeployment(latestBlock.timestamp);

  const address = await batchNFTs.getAddress();
  console.log(`Contract Address: ${address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
