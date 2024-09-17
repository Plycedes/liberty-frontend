import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "./utils/api";
import { useState, useEffect } from "react";

function Welcome() {
    const navigate = useNavigate();
    const [account, setAccount] = useState(localStorage.getItem("account"));

    const connectMetamask = async () => {
        const account = await connect();
        localStorage.setItem("account", account);
        navigate("app/");
    };

    useEffect(() => {
        window.ethereum.on("accountsChanged", accountWasChanged);
    });
    useEffect(() => {}, [account]);

    const accountWasChanged = (accounts) => {
        setAccount(accounts[0]);
        if (accounts[0] === undefined) {
            localStorage.setItem("account", "");
        } else {
            localStorage.setItem("account", accounts[0]);
        }
    };

    return (
        <div className="relative p-20">
            <div className="bg-cover bg-center bg-no-repeat bg-[url('https://slashtechtrends.com/wp-content/uploads/2024/05/new-the-future-of-blockchain-in-tech-2022-1-jpg.webp')] rounded-lg overflow-hidden h-250 w-250">
                <div class="bg-gradient-to-r from-gray-800 via-gray-800 to-transparent p-10">
                    <h1 className="text-white text-7xl font-bold">
                        L<b className="text-purple-500">!</b>berty
                    </h1>
                    <p className="mt-5 text-white text-3xl">A decentralized petition webapp.</p>
                    <p className="text-white mt-3">
                        Liberty is a decentralized platform where your vote counts—literally.
                        <br />
                        Harnessing the power of blockchain, we ensure transparency, security,
                        <br /> and fairness in every petition like a true democracy.
                    </p>
                    <ul className="mt-3 text-white">
                        <li>
                            <b>Explore Petitions: </b>Browse petitions that matter to you.
                        </li>
                        <li>
                            <b>Sign & Vote: </b>Use your digital wallet to securely sign and cast
                            your vote.
                        </li>
                        <li>
                            <b>Track Impact: </b>Watch as decentralized voting shapes real change.
                        </li>
                    </ul>
                    <div className="mt-5">
                        {localStorage.getItem("account") ? (
                            <div>
                                <h1 className="text-white text-xl">Welcome...</h1>
                                <p className="text-white text-2xl">
                                    Mr. {localStorage.getItem("account").substring(0, 10)}
                                </p>
                                <button
                                    className="bg-purple-700 mt-3 text-white px-4 py-2 rounded hover:bg-purple-800 focus:outline-none text-xl"
                                    onClick={() => {
                                        navigate("app/");
                                    }}
                                >
                                    Continue
                                    <span class="ml-2">→</span>
                                </button>
                            </div>
                        ) : (
                            <div className="text-white">
                                <h1 className="text-xl">Connect to continue...</h1>
                                <button
                                    className="bg-purple-700 mt-3 text-white px-4 py-2 rounded hover:bg-purple-800 focus:outline-none text-2xl"
                                    onClick={connectMetamask}
                                >
                                    Connect
                                    <span class="ml-2">→</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
