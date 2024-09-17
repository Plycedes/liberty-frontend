import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function PetitionInfo() {
    const [petition, setPetition] = useState({});
    const navigate = useNavigate();
    const { index } = useParams();
    const petitions = useSelector((state) => state.petitions);

    useEffect(() => {
        //console.log(petitions);
        setPetition(petitions[index]);
    }, []);
    return (
        <div className="text-white">
            {petition ? (
                <div className="">
                    <h1>{petition.owner}</h1>
                    <h1>{petition.title}</h1>
                    <h1>{petition.description}</h1>
                    <h1>{petition.votes}</h1>
                    <button
                        className="text-white font-semibold bg-purple-600 rounded-lg pb-2 pl-2 pr-2 pt-2"
                        onClick={() => navigate(-1)}
                    >
                        {`<- Back`}
                    </button>
                </div>
            ) : (
                <button
                    className="text-white font-semibold bg-purple-600 rounded-lg pb-2 pl-2 pr-2 pt-2"
                    onClick={() => navigate(-1)}
                >
                    {`<- Back`}
                </button>
            )}
        </div>
    );
}

export default PetitionInfo;
