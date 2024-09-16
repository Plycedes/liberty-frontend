import React, { useEffect, useState } from "react";
import { PetitionCard } from "../components";
import { getPetitions } from "../utils/api";
import { useDispatch } from "react-redux";
import { addPetitons } from "../features/petitionSlice";

function Dashboard() {
    const [petitions, setPetitions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const response = await getPetitions();
            dispatch(addPetitons(response));
        })();
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
