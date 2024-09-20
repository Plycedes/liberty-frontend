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
        console.log("Complete");
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getPetitions = async () => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        console.log("Getting all petitions");
        const tx = await contract.getPetitions();
        console.log("Complete");

        const petitions = tx.map((petition, i) => ({
            owner: petition.owner,
            title: petition.title,
            description: petition.description,
            image: petition.image,
            votes: Number(petition.votes),
            pId: i,
        }));

        return petitions;
    } catch (error) {
        console.log(error);
        //throw error;
    }
};

export const getVoters = async (index) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        console.log("Getting voters");
        const voters = await contract.getVoters(index);
        console.log("Complete");
        return voters;
    } catch (error) {
        console.log(error);
    }
};

export const vote = async (index) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        console.log("Voting");
        const tx = await contract.voteToPetition(index);
        await tx.wait();
        console.log("Complete");
    } catch (error) {
        console.log(error);
    }
};
