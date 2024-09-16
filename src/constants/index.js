export const contractAddress = "0x7Dfea4e6F2577062ec028CBBE6736B96fd898f1A";

export const ABI = [
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint256", name: "numberOfPetitons", type: "uint256" },
        ],
        name: "PetitionAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint256", name: "numberOfVoters", type: "uint256" },
            { indexed: false, internalType: "address[]", name: "voters", type: "address[]" },
        ],
        name: "VoteCasted",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "string", name: "_title", type: "string" },
            { internalType: "string", name: "_description", type: "string" },
            { internalType: "string", name: "_image", type: "string" },
        ],
        name: "createPetition",
        outputs: [],
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
        inputs: [],
        name: "numberOfPetitions",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "petitons",
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
