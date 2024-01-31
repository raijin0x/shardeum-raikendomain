const hre = require("hardhat");

const main = async ()=>{
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy("shm")
    await domainContract.deployed()
    console.log("contract depolyed to : ", domainContract.address)

    let setDR = await domainContract.registers("raikensham",{value: hre.ethers.utils.parseEther("1")});
    await setDR.wait();

    const addr = await domainContract.getAddress("raikensham");
}

const runMain = async ()=>{
    try {
        await main()
        process.exit(0);
    } catch (error) {
        console.log("error: ",error)
        process.exit(1)
    }
}

runMain();