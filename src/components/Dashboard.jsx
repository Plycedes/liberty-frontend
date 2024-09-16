import React, { useEffect } from "react";
import { PetitionCard } from "../components";
import { getPetitions } from "../utils/api";

function Dashboard() {
    useEffect(() => {
        getPetitions();
    }, []);
    return (
        <div className="grid grid-cols-3 gap-5 my-8 mx-3 2xl:grid-cols-4">
            <PetitionCard />
            <PetitionCard />
            <PetitionCard />
            <PetitionCard />
            <PetitionCard />
        </div>
    );
}

export default Dashboard;
