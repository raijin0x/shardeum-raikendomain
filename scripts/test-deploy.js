const hre = require("hardhat");

const main = async ()=>{
    // const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy("shm")
    await domainContract.deployed()
    console.log("contract depolyed to : ", domainContract.address)

    let setDR = await domainContract.registers("raikensham",{value: hre.ethers.utils.parseEther("1")});
    await setDR.wait();
    console.log("Minted domain raikensham.shm")

    const addr = await domainContract.getAddress("raikensham");
    console.log("owner of raikensham domain : ", addr);

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