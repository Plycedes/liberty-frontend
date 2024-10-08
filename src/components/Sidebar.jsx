import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

function Sidebar() {
    const [account, setAccount] = useState(localStorage.getItem("account"));
    const navigate = useNavigate();

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
    //[#414264]
    return (
        <div className="flex">
            <div className="w-64 bg-transparent text-white h-screen p-4">
                <div className="h-1/6">
                    <div className="flex mx-2">
                        <img
                            className="w-10 h-10"
                            src="https://res.cloudinary.com/dxsffcg6l/image/upload/fl_preserve_transparency/v1725359793/image_2024-09-03_160517898-removebg-preview_f8tzed.jpg?_s=public-apps"
                        />
                        <h1 className="text-4xl font-bold mx-4">
                            L<b className="text-purple-500">!</b>berty
                        </h1>
                    </div>
                    <div className="rounded bg-gray-800 p-2 py-2 mt-5">
                        {account ? (
                            <div className="flex items-center">
                                <Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
                                <p className="text-xl text-purple-300 ml-3">
                                    {account.substring(0, 12)}
                                </p>
                            </div>
                        ) : (
                            <h1 className="text-2xl">Not Connected...</h1>
                        )}
                    </div>
                </div>
                <div className="h-5/6 pb-5 pt-1">
                    <div className="rounded bg-gray-800 p-2 mt-5 h-full">
                        <ul className="text-xl my-1">
                            <li>
                                <NavLink to="">
                                    <div className="flex gap-2 items-center block py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Dashboard
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="create-petition">
                                    <div className="flex gap-2 items-center block py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=uSWplRVhqqlS&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Create Petition
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="profile">
                                    <div className="flex gap-2 items-center block py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Profile
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="leaderboard">
                                    <div className="flex gap-2 items-center block py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=70624&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Leaderboard
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="help">
                                    <div className="flex gap-2 items-center block pt-3 py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=7775&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        FAQ & Help
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="contact-us">
                                    <div className="flex gap-2 items-center block pt-3 py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=2848&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Contact Us
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
                                    <div className="flex gap-2 items-center block py-2 px-4 hover:bg-gray-700 rounded">
                                        <img
                                            src="https://img.icons8.com/?size=100&id=MwshWpYc0tcg&format=png&color=FFFFFF"
                                            className="w-15 h-6"
                                        />
                                        Back
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <hr className="my-3 border-t-2 border-gray-400" />
                            </li>
                            <li>
                                <div className="my-6">
                                    <input
                                        className="block py-2 px-4 bg-gray-700 rounded w-full"
                                        placeholder="Petition Name"
                                    />
                                    <button
                                        className="flex items-center justify-center gap-1 bg-purple-700 mt-3 w-full text-white py-2 rounded hover:bg-purple-800 focus:outline-none text-xl"
                                        onClick={() => {}}
                                    >
                                        Search
                                        <img
                                            src="https://img.icons8.com/?size=100&id=7789&format=png&color=FFFFFF"
                                            className="w-15 h-6 mt-1"
                                        />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
