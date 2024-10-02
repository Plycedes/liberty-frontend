import React from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./components";

function Home() {
    return (
        <>
            {!window.ethereum ? (
                <Loader text="Install Metamask to access this site" loader={false} />
            ) : (
                <Outlet />
            )}
        </>
    );
}

export default Home;
