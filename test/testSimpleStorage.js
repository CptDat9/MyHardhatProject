// test/testSimpleStorage.js
import { expect } from 'chai'; // Nhập expect từ chai
import hardhat from 'hardhat';

const { ethers } = hardhat;

describe("SimpleStorage contract", function () {
    let simpleStorage;

    beforeEach(async function () {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();
    });

    it("Should store and retrieve the correct value", async function () {
        await simpleStorage.store(42);
        const storedValue = await simpleStorage.retrieve();
        expect(storedValue.toNumber()).to.equal(42); // Chuyển đổi BigNumber thành số nguyên
    });
});
    