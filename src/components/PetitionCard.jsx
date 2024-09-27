import React from "react";
import { useNavigate } from "react-router-dom";

function PetitionCard({ petition, height = 220 }) {
    const navigate = useNavigate();

    const knowMore = () => {
        navigate(`petition/${petition.pId}`, { state: petition });
    };
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className={`rounded-t-lg w-full h-[${height}px]`}
                    src={petition.image}
                    alt="Campaign Image"
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 ">
                        {petition.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {petition.description.substr(0, 45) + "..."}
                </p>
                <button
                    className="text-white font-semibold bg-purple-600 rounded-lg pb-2 pl-2 pr-2 pt-2"
                    onClick={() => knowMore()}
                >
                    {`Know More ->`}
                </button>
            </div>
        </div>
    );
}

export default PetitionCard;
