import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const petitions = useSelector((state) => state.petitions);
    return <div>{petitions[0].owner}</div>;
}

export default Profile;
