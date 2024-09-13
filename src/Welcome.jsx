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
        <div>
            {localStorage.getItem("account") ? (
                <h1 className="text-white">Welcome {localStorage.getItem("account")}</h1>
            ) : (
                <div className="text-white">
                    <h1>Connect to continue</h1>
                    <button onClick={connectMetamask}>Connect</button>
                </div>
            )}
        </div>
    );
}

export default Welcome;
