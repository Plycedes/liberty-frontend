import React, { useState } from "react";
import { Loader } from "../components";
import { getLeaderboard } from "../utils/api";

function Leaderboard() {
    const [petitions, setPetitions] = useState([]);
    const [loading, setLoading] = useState(false);

    useState(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await getLeaderboard();
                setPetitions(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })();
    });

    return (
        <div>
            {loading && <Loader text="Loading the leaderboard" />}
            {petitions.length > 0 ? (
                <div className="flex w-full h-full">
                    <div className="w-1/2 flex h-screen justify-center items-center pb-20">
                        <div class="w-full flex items-end justify-center space-x-4 mt-10">
                            <div className="w-1/3">
                                <div class="bg-gray-700 rounded-lg flex flex-col justify-end items-center p-2">
                                    <div class="bg-gray-800 shadow-lg flex flex-col w-full rounded-lg">
                                        <img
                                            src={petitions[1].image}
                                            className="w-full h-[100px] rounded-lg"
                                        />
                                        <p className="text-md text-white p-2">
                                            {petitions[1].title}
                                        </p>
                                    </div>
                                    <span class="text-sm font-medium text-gray-300 mt-2">
                                        Total Votes: {petitions[1].votes}
                                    </span>
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div class="bg-purple-700 rounded-lg flex flex-col justify-end items-center p-2 transform translate-y-[-60px]">
                                    <div class="bg-gray-800 shadow-lg flex flex-col w-full rounded-lg">
                                        <img
                                            src={petitions[0].image}
                                            className="w-full h-[100px] rounded-lg"
                                        />
                                        <p className="text-md text-white p-2">
                                            {petitions[0].title}
                                        </p>
                                    </div>
                                    <span class="text-sm font-medium text-gray-300 mt-2">
                                        Total Votes: {petitions[0].votes}
                                    </span>
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div class="bg-gray-700 rounded-lg flex flex-col justify-end items-center p-2">
                                    <div class="bg-gray-800 shadow-lg flex flex-col w-full rounded-lg">
                                        <img
                                            src={petitions[2].image}
                                            className="w-full h-[100px] rounded-lg"
                                        />
                                        <p className="text-md text-white p-2">
                                            {petitions[2].title}
                                        </p>
                                    </div>
                                    <span class="text-sm font-medium text-gray-300 mt-2">
                                        Total Votes: {petitions[2].votes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex w-full h-full px-10 py-20">
                            <div className="w-full h-full m-2 p-5 pb-10 border rounded-lg shadow bg-gray-800 border border-purple-500">
                                <div className="flex justify-center text-2xl mb-2 ml-2 text-purple-500 font-semibold">
                                    Deployed Petitions:
                                </div>
                                <div className="flex ml-2 w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent">
                                    {petitions.length > 0 ? (
                                        <div className="flex flex-col space-y-2 text-gray-400 text-lg">
                                            <table className="table-fixed w-full">
                                                {petitions.map((petition, index) => (
                                                    <tr key={petition.pId} className="flex  my-1">
                                                        <td className="w-1/12 text-xl">
                                                            {index + 1}.
                                                        </td>

                                                        <td className="w-10/12 text-xl ">
                                                            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                                {petition.title}
                                                            </div>
                                                        </td>

                                                        <td className="w-1/12 text-xl">
                                                            <div className="">{petition.votes}</div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="w-full flex justify-center items-center text-3xl text-gray-500">
                                            Nothing to show {":("}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex h-screen items-center justify-center font-semibold text-gray-600 text-4xl">
                    Alas! Nothing to show :{`(`}
                </div>
            )}
        </div>
    );
}

export default Leaderboard;
