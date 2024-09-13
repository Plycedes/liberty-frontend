import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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

    return (
        <div className="flex">
            <div class="w-64 bg-transparent text-white h-screen p-4">
                <h1 class="text-3xl font-bold">Liberty</h1>
                <div className="rounded bg-[#414264] p-2 mt-5">
                    {account ? <h1>{account.substring(0, 10)}</h1> : <h1>Not Connected</h1>}
                </div>

                <div className="rounded bg-[#414264] p-2 mt-5">
                    <ul class="text-xl">
                        <li>
                            <NavLink to="">
                                <div className="block py-2 px-4 hover:bg-gray-700 rounded">
                                    Dashboard
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="create-petition">
                                <div className="block py-2 px-4 hover:bg-gray-700 rounded">
                                    Create Petition
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <div className="block py-2 px-4 hover:bg-gray-700 rounded">
                                    Profile
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                <div className="block py-2 px-4 hover:bg-gray-700 rounded">
                                    Back
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
