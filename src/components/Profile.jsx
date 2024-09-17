import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const petitions = useSelector((state) => state.petitions);
    return (
        <div>
            {petitions ? (
                petitions[0].owner
            ) : (
                <h1 className="text-3xl text-white">Please visit dashboard to refresh</h1>
            )}
        </div>
    );
}

export default Profile;
