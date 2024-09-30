import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPetitions, getVotingHistory, getBalance } from "../utils/api.js";
import { Loader, MiniCard } from "../components";
import { ethers } from "ethers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

function Profile() {
    const [petitions, setPetitions] = useState([]);
    const [votedPetitons, setVotedPetitions] = useState([]);
    const [totalVotes, setTotalVotes] = useState(0);
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState(0);
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
                const bal = await getBalance(account);
                setBalance(bal);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, [account]);

    useEffect(() => {
        let votes = 0;
        if (petitions.length > 0) {
            petitions.map((petition) => (votes += petition.votes));
        }
        setTotalVotes(votes);
    }, [petitions]);

    return (
        <div>
            {loading && <Loader text="Loading User Profile" />}
            <div>
                <div>
                    <div className="h-screen flex flex-col">
                        <div className="flex h-3/5">
                            <div className="w-1/2 flex">
                                <div className="w-full m-2 p-3 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                    <div className="h-full">
                                        <div className="">
                                            <h1 className="text-3xl font-semibold text-purple-500">
                                                Welcome!
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="m-2 mt-3 bg-gray-700 p-3 rounded-lg">
                                                <h1 className="mb-3 text-xl text-purple-300 font-semibold">
                                                    User Wallet Address:
                                                </h1>
                                                <div className="flex gap-3 items-center">
                                                    <Jazzicon
                                                        diameter={30}
                                                        seed={jsNumberForAddress(String(account))}
                                                    />
                                                    <h1 className="text-lg text-purple-200">
                                                        {account}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-2 mt-3 bg-gray-700 p-3 rounded-lg">
                                            <h1 className="text-purple-300 text-xl font-semibold">
                                                Account Stats:
                                            </h1>
                                            <div className="ml-2 text-gray-100">
                                                <div className="flex gap-3 text-lg mt-3 mb-2">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=100819&format=png&color=FFFFFF"
                                                        className="w-15 h-6"
                                                    />
                                                    <h1 className="font-semibold text-lg text-gray-200">
                                                        Wallet Balance:
                                                    </h1>
                                                    <h1 className="text-lg text-purple-300">
                                                        {balance}
                                                    </h1>
                                                </div>
                                                <div className="flex gap-3 mb-2">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=uSWplRVhqqlS&format=png&color=FFFFFF"
                                                        className="w-15 h-6"
                                                    />
                                                    <h1 className="text-lg font-semibold text-gray-200">
                                                        Petitions Created:
                                                    </h1>
                                                    <h1 className="text-lg text-purple-300">
                                                        {petitions.length}
                                                    </h1>
                                                </div>
                                                <div className="flex gap-3 items-center mb-2">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=k1xXzD3NEvLF&format=png&color=FFFFFF"
                                                        className="w-15 h-6"
                                                    />
                                                    <h1 className="text-lg font-semibold text-gray-200">
                                                        Petitions Signed:
                                                    </h1>
                                                    <h1 className="text-lg text-purple-300">
                                                        {votedPetitons.length}
                                                    </h1>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                        src="https://img.icons8.com/?size=100&id=11220&format=png&color=FFFFFF"
                                                        className="w-15 h-6"
                                                    />
                                                    <h1 className="text-lg font-semibold text-gray-200">
                                                        Total votes:
                                                    </h1>
                                                    <h1 className="text-lg text-purple-300">
                                                        {totalVotes}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 flex">
                                <div className="w-full m-2 p-3 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                    <div className="flex justify-center text-2xl text-purple-500 font-semibold">
                                        Signed Petitions
                                    </div>
                                    <div className="flex h-full my-2 pb-10">
                                        <div className="w-full h-full rounded-lg overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent">
                                            {votedPetitons.length > 0 ? (
                                                <div>
                                                    <table className="table-fixed w-full">
                                                        {votedPetitons.map((petition, index) => (
                                                            <tr
                                                                key={petition.pId}
                                                                className="flex text-white my-1"
                                                            >
                                                                <td className="w-1/12 text-xl">
                                                                    {index + 1}.
                                                                </td>

                                                                <td className="w-5/12 text-xl text-purple-300 ml-1">
                                                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                                        {petition.title}
                                                                    </div>
                                                                </td>

                                                                <td className="w-6/12 text-xl ml-5 text-gray-300">
                                                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                                        {petition.description}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </table>
                                                </div>
                                            ) : (
                                                <div className="text-white">
                                                    Signed Petitions will appear here
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-2/5 mb-4">
                            <div className="w-full h-full m-2 p-2 pb-10 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                <div className="text-2xl mb-2 ml-2 text-purple-500 font-semibold">
                                    Deployed Petitions:
                                </div>
                                <div className="flex ml-2 w-full h-full overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent">
                                    {petitions.length > 0 ? (
                                        <div className="flex flex-row space-x-4">
                                            {petitions.map((petition) => (
                                                <div key={petition.pId} className="flex-shrink-0">
                                                    <MiniCard petition={petition} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>petition</div>
                                    )}
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
