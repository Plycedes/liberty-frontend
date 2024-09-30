import React from "react";

function MiniCard({ petition }) {
    return (
        <div>
            <div className="relative flex flex-row bg-gray-800 shadow-sm border border-purple-500 rounded-lg w-96 h-52">
                <div className="relative md:w-2/5 rounded-lg shrink-0 overflow-hidden">
                    <img
                        src={petition.image}
                        alt="card-image"
                        className="h-full w-full   object-cover"
                    />
                </div>
                <div className="pl-2 pt-2">
                    <h4 className="mb-2 text-purple-500 text-xl font-semibold break-words">
                        {petition.title.substr(0, 50) + "..."}
                    </h4>
                    <p className="mb-3 text-slate-400 leading-normal font-light">
                        {petition.description.substr(0, 80) + "..."}
                    </p>
                    <div className="mb-4 rounded-full bg-purple-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                        Votes: {petition.votes}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default MiniCard;
