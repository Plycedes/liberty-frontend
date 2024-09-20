import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { getVoters, vote } from "../utils/api.js";
import { Loader } from "../components";

function PetitionInfo() {
    const { state } = useLocation();
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [voters, setVoters] = useState([]);
    const [upper, setUpper] = useState(10);
    const navigate = useNavigate();
    const { index } = useParams();

    const calcProgress = (v) => {
        let temp = upper;
        while (temp < v) {
            temp *= 10;
        }
        setUpper(temp);
        setProgress((v / temp) * 100);
    };

    useEffect(() => {
        //console.log(petitions);
        calcProgress(state.votes);
    }, []);

    useEffect(() => {
        (async () => {
            const response = await getVoters(index);
            setVoters(response);
            console.log(response);
        })();
    }, []);

    useEffect(() => {}, [voters]);

    const sign = async () => {
        try {
            setLoading(true);
            await vote(index);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className="text-white">
            {loading && <Loader />}
            {state ? (
                <div className="flex w-full h-screen items-center">
                    <div className="w-1/2 flex justify-center">
                        <div className="w-full m-3 border rounded-lg shadow bg-gray-800 border border-purple-500">
                            <img
                                className="rounded-t-lg w-full h-[320px]"
                                src={state.image}
                                alt="Campaign Image"
                            />
                            <div className="m-3">
                                <h1 className="text-2xl text-purple-500 font-bold my-2">
                                    {state.title}
                                </h1>
                                <h1 className="text-gray-300 my-2">{state.description}</h1>

                                <div className="mb-1 text-base font-medium text-purple-500">
                                    Votes
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-start w-full bg-gray-600 rounded-full h-4">
                                        <div
                                            className="flex justify-end items-center p-2 bg-purple-500 h-4 rounded-full"
                                            style={{ width: progress + "%" }}
                                        >
                                            {progress >= 5 ? <p>{state.votes}</p> : <p></p>}
                                        </div>
                                        {progress < 5 ? (
                                            <p className="z-10 inset-0">{state.votes}</p>
                                        ) : (
                                            <p className="z-10"></p>
                                        )}
                                    </div>
                                    <h1>{upper}</h1>
                                </div>

                                <div className="flex my-3 gap-2 items-center">
                                    <Jazzicon
                                        diameter={30}
                                        seed={jsNumberForAddress(String(state.owner))}
                                    />
                                    <h1>{state.owner}</h1>
                                </div>

                                <button
                                    className="text-white m-2 font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg pb-2 pl-2 pr-2 pt-2"
                                    onClick={() => navigate(-1)}
                                >
                                    {`<- Back`}
                                </button>
                                <button
                                    className="text-white m-2 font-semibold bg-purple-600 hover:bg-purple-700 rounded-lg pb-2 pl-2 pr-2 pt-2"
                                    onClick={() => sign()}
                                >
                                    Sign Petition
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex min-h-[611px]">
                        <div className="w-full m-3 border rounded-lg shadow bg-gray-800 border border-purple-500">
                            <div className="flex justify-center m-3">
                                <h1 className="text-xl text-purple-500 font-semibold">Signers</h1>
                            </div>
                            <div className="flex justify-center">
                                {voters.length > 0 ? (
                                    <h1 className="">{voters[0]}</h1>
                                ) : (
                                    <p>Signers will appear here</p>
                                )}
                            </div>
                        </div>
                    </div>
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
