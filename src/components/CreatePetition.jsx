import React, { useState } from "react";
import { createPetition } from "../utils/api";

function CreatePetition() {
    const [owner, setOwner] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

    const submitForm = async () => {
        try {
            await createPetition(owner, title, description, imageURL);
        } catch (error) {}
    };
    //[#414264]
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="w-full max-w-lg p-6 bg-gray-800 border border-purple-500 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Enter Petition Details</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="owner" className="block text-sm font-medium">
                            Owner
                        </label>
                        <input
                            type="text"
                            id="owner"
                            name="owner"
                            className="mt-1 block w-full p-2  bg-gray-700 rounded-lg focus:ring-4 focus:ring-purple-500"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full p-2  bg-gray-700 rounded-lg focus:ring-4 focus:ring-purple-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            className="mt-1 block w-full p-2 bg-gray-700 rounded-lg focus:ring-4 focus:ring-purple-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium">
                            Image URL
                        </label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            className="mt-1 block w-full p-2  bg-gray-700 rounded-lg focus:ring-4 focus:ring-purple-500"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 focus:bg-purple-900"
                        onClick={submitForm}
                    >
                        Create Petition
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePetition;
