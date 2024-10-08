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
        const tx = await contract.createPetition(owner, title, description, image);
        const tr = await tx.wait();
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
        const tx = await contract.getPetitions();

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
        const voters = await contract.getVoters(index);
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
        const tx = await contract.voteToPetition(index);
        await tx.wait();
    } catch (error) {
        console.log(error);
    }
};

export const getVotingHistory = async (account, petitions) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        let response = [];
        for (let i = 0; i < petitions.length; i++) {
            const voters = await contract.getVoters(petitions[i].pId);
            if (voters.includes(ethers.getAddress(account))) {
                response.push(petitions[i]);
            }
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getBalance = async (account) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        const balance = await provider.getBalance(account);
        return ethers.formatEther(balance);
    } catch (error) {
        console.log(error);
    }
};

export const getLeaderboard = async () => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        const tx = await contract.getPetitions();

        const petitions = tx.map((petition, i) => ({
            owner: petition.owner,
            title: petition.title,
            description: petition.description,
            image: petition.image,
            votes: Number(petition.votes),
            pId: i,
        }));

        petitions.sort((a, b) => b.votes - a.votes);
        return petitions;
    } catch (error) {
        console.log(error);
    }
};
