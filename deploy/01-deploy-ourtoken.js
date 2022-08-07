const { network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const initialSupply = ethers.utils.parseEther("10000")
    const outTokenDeployment = await deploy("OurToken", {
        from: deployer,
        args: [initialSupply],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}

module.exports.tags = ["all", "ourtoken"]
