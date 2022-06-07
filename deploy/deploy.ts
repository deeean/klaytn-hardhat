import Caver from 'caver-js';
import { HardhatRuntimeEnvironment, HttpNetworkConfig } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const fn: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  delete hre.ethers.provider.formatter.formats.transaction['type'];

  const networkConfig = hre.network.config as HttpNetworkConfig;

  const caver = new Caver(
    new Caver.providers.HttpProvider(networkConfig.url, {
      headers: [
        { name: 'Authorization', value: networkConfig.httpHeaders['Authorization'] }
      ]
    })
  );

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const gasPrice = await hre.network.provider.send('klay_gasPrice', []);

  const deployment = await deploy("Example", {
    log: true,
    from: deployer,
    gasLimit: 7500000,
    gasPrice,
  });

  console.log(deployment);
  // const contract = caver.contract.create(deployment.abi, deployment.address);
}

export default fn;