import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [account, setAccount] = useState(localStorage.getItem("account"));
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
            <NavLink to="">DashBoard</NavLink>{" "}
            <NavLink to="create-petition">Create Petition</NavLink>
            {account ? <h1>{account}</h1> : <h1>Not Connected</h1>}
        </div>
    );
}

export default Sidebar;
