import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPetitions } from "../utils/api.js";
import { Loader } from "../components";
import { ethers } from "ethers";

function Profile() {
    const [petitions, setPetitions] = useState([]);
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
                {petitions.length > 0 ? (
                    <div>
                        <div class="h-screen flex flex-col">
                            <div class="flex flex-grow">
                                <div class="w-1/2 flex">
                                    <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500"></div>
                                </div>

                                <div class="w-1/2 flex">
                                    <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500"></div>
                                </div>
                            </div>

                            <div class="flex-grow flex">
                                <div className="w-full m-2 border rounded-lg shadow bg-gray-800 border border-purple-500"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-3xl text-white">No profle</h1>
                )}
            </div>
        </div>
    );
}

export default Profile;
