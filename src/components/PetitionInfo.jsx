import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

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
                <div className="flex w-full h-screen items-center">
                    <div className="w-1/2 flex justify-center border">
                        <div className="w-full m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img
                                className="rounded-t-lg w-full h-[320px]"
                                src={petition.image}
                                alt="Campaign Image"
                            />
                            <div className="m-3">
                                <h1 className="text-2xl text-purple-500 font-bold my-2">
                                    {petition.title}
                                </h1>
                                <h1 className="text-gray-300 my-2">{petition.description}</h1>
                                <h1>{petition.votes}</h1>

                                <div className="flex my-3 gap-2 items-center">
                                    <Jazzicon
                                        diameter={30}
                                        seed={jsNumberForAddress(String(petition.owner))}
                                    />
                                    <h1>{petition.owner}</h1>
                                </div>

                                <button
                                    className="text-white font-semibold bg-purple-600 rounded-lg pb-2 pl-2 pr-2 pt-2"
                                    onClick={() => navigate(-1)}
                                >
                                    {`<- Back`}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center border">Voters</div>
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
