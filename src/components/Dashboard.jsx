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
            setPetitions(response);
        })();
    }, []);
    return (
        <div className="my-5">
            <h1 className="text-3xl font-bold text-purple-500">All Petitions</h1>
            {window.ethereum ? (
                <div>
                    {petitions ? (
                        <div className="grid grid-cols-3 gap-5 my-8 mx-3 2xl:grid-cols-4">
                            {petitions.map((petition, i) => (
                                <div key={petition.pId}>
                                    <PetitionCard petition={petition} index={i} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h1 className="text-3xl font-semibold">Connect Metmask..</h1>
                    )}
                </div>
            ) : (
                <h1 className="text-3xl font-semibold">Install Metamask to continue...</h1>
            )}
        </div>
    );
}

export default Dashboard;
