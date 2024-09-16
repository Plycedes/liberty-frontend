import { ethers } from "ethers";
import { contractAddress, ABI } from "../constants";

let signer, provider;

export const connect = async () => {
    if (!window.ethereum) {
        console.log("Metamask not found");
        return "";
    } else {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            return accounts[0];
        } catch (error) {
            console.log(error);
        }
    }
};

export const createPetition = async (owner, title, description, image) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        console.log("Mining");
        const tx = await contract.createPetition(owner, title, description, image);
        const tr = await tx.wait();
        console.log(tr.logs[0].args[0]);
        console.log("Complete");
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getPetitions = async () => {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
};
