export const contractAddress = "0xE21D2373D16E98Bd60676b58DA7742D13EaeE436";

export const ABI = [
    {
        inputs: [
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "string", name: "_title", type: "string" },
            { internalType: "string", name: "_description", type: "string" },
            { internalType: "string", name: "_image", type: "string" },
        ],
        name: "createPetition",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getPetitions",
        outputs: [
            {
                components: [
                    { internalType: "address", name: "owner", type: "address" },
                    { internalType: "string", name: "title", type: "string" },
                    { internalType: "string", name: "description", type: "string" },
                    { internalType: "string", name: "image", type: "string" },
                    { internalType: "uint256", name: "votes", type: "uint256" },
                    { internalType: "address[]", name: "voters", type: "address[]" },
                ],
                internalType: "struct Liberty.Petition[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
        name: "getVoters",
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "numberOfPetitions",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "petitions",
        outputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "string", name: "title", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "image", type: "string" },
            { internalType: "uint256", name: "votes", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
        name: "voteToPetition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
