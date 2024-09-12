import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <NavLink to="">DashBoard</NavLink>{" "}
            <NavLink to="create-petition">Create Petition</NavLink>
        </div>
    );
}

export default Sidebar;
