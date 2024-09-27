import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPetitions, getVotingHistory } from "../utils/api.js";
import { Loader } from "../components";
import { ethers } from "ethers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

function Profile() {
    const [petitions, setPetitions] = useState([]);
    const [votedPetitons, setVotedPetitions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState(localStorage.getItem("account"));

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                setAccount(localStorage.getItem("account"));
                const response = await getPetitions();
                setPetitions(
                    response.filter((petition) => {
                        return petition.owner == ethers.getAddress(account);
                    })
                );
                const res = await getVotingHistory(account, response);
                setVotedPetitions(res);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, [account]);

    return (
        <div>
            {loading && <Loader text="Loading User Profile" />}
            <div>
                <div>
                    <div className="h-screen flex flex-col">
                        <div className="flex flex-grow">
                            <div className="w-1/2 flex">
                                <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                    <div className="m-3 mb-0 h-full">
                                        <div className="my-5">
                                            <h1 className="text-3xl font-semibold text-white">
                                                Welcome!
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="m-2 bg-gray-700 p-3 rounded-lg">
                                                <h1 className="mb-3 text-xl text-white font-semibold">
                                                    User Wallet Address:
                                                </h1>
                                                <div className="flex gap-3 my-2 items-center">
                                                    <Jazzicon
                                                        diameter={50}
                                                        seed={jsNumberForAddress(String(account))}
                                                    />
                                                    <h1 className="text-xl text-purple-200">
                                                        {ethers.getAddress(account)}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-2 my-5 bg-gray-700 p-3 rounded-lg">
                                            <h1 className="mb-3 text-purple-300 text-xl font-semibold">
                                                Account Stats:
                                            </h1>
                                            <div className="ml-2 text-gray-100">
                                                <div className="flex gap-3 text-xl my-3 mt-5">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=100819&format=png&color=FFFFFF"
                                                        width={30}
                                                        height={10}
                                                    />
                                                    <h1 className="font-semibold">
                                                        Wallet Balance:
                                                    </h1>
                                                </div>
                                                <div className="flex gap-3 my-4">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=uSWplRVhqqlS&format=png&color=FFFFFF"
                                                        width={30}
                                                        height={10}
                                                    />
                                                    <h1 className="text-xl font-semibold">
                                                        Petitions Created:
                                                    </h1>
                                                </div>
                                                <div className="flex gap-3 my-4">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=k1xXzD3NEvLF&format=png&color=FFFFFF"
                                                        width={30}
                                                        height={10}
                                                    />
                                                    <h1 className="text-xl font-semibold">
                                                        Petitions Signed:
                                                    </h1>
                                                    <h1>{votedPetitons.length}</h1>
                                                </div>
                                                <div className="flex gap-3 my-4">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=Of3mVxVcK1jc&format=png&color=FFFFFF"
                                                        width={30}
                                                        height={10}
                                                    />
                                                    <h1 className="text-xl font-semibold">
                                                        Total Signers:
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 flex">
                                <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500"></div>
                            </div>
                        </div>

                        <div className="flex-grow flex">
                            <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                <div className="flex gap-3 my-4">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=Of3mVxVcK1jc&format=png&color=FFFFFF"
                                        width={30}
                                        height={10}
                                    />
                                    <h1 className="text-xl font-semibold">Total Signers:</h1>
                                </div>
                                <div className="flex gap-3 my-4">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=Of3mVxVcK1jc&format=png&color=FFFFFF"
                                        width={30}
                                        height={10}
                                    />
                                    <h1 className="text-xl font-semibold">Total Signers:</h1>
                                </div>
                                <div className="flex gap-3 my-4">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=Of3mVxVcK1jc&format=png&color=FFFFFF"
                                        width={30}
                                        height={10}
                                    />
                                    <h1 className="text-xl font-semibold">Total Signers:</h1>
                                </div>
                                <div className="flex gap-3 my-4">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=Of3mVxVcK1jc&format=png&color=FFFFFF"
                                        width={30}
                                        height={10}
                                    />
                                    <h1 className="text-xl font-semibold">Total Signers:</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
