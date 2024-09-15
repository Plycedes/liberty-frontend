import React from "react";

function PetitionCard({ petition, index }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="rounded-t-lg w-full h-[240px]"
                    src="https://i0.wp.com/jcpa.org/wp-content/uploads/2024/05/Election.png?fit=1280%2C720&ssl=1&resize=900%2C506.25"
                    alt="Campaign Image"
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Card1
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Description sdjafh asklfyhwenc asdus asofha f asdjsaji fha sdj
                </p>
                <button
                    className="text-white bg-orange-700 rounded-lg pb-2 pl-2 pr-2 pt-1"
                    onClick={() => knowMore()}
                >
                    Know more
                </button>
            </div>
        </div>
    );
}

export default PetitionCard;
