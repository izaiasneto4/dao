import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE } from './../helper-hardhat-config';

const deployGovernorContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const governanceToken = await deployments.get("GovernanceToken");
  const timeLock = await deployments.get("TimeLock");

  log("Deploying Governor...")

  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: [
      governanceToken.address,
      timeLock.address,
      VOTING_DELAY,
      VOTING_PERIOD,
      QUORUM_PERCENTAGE
    ],
    log: true,
  })
}

export default deployGovernorContract;
