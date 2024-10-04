import React from "react";

function Help() {
    return (
        <div>
            <section class="py-10">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-purple-500 sm:text-4xl lg:text-5xl">
                            Questions & Answers
                        </h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
                            Explore the common questions and answers about Liberty
                        </p>
                    </div>

                    <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                        <div class="flex items-start">
                            <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span class="text-xl font-semibold text-purple-500">?</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-xl font-semibold text-purple-500">
                                    Is Liberty non-profit?
                                </p>
                                <p class="mt-4 text-base text-gray-400">
                                    Yes! Liberty is completely non-profit. All the charges you pay
                                    are for interacting with the blockchain only. We make no profit
                                    from them.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span class="text-xl font-semibold text-purple-500">?</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-xl font-semibold text-purple-500">
                                    How can I delete a petition?
                                </p>
                                <p class="mt-4 text-base text-gray-400">
                                    As of now you cannot delete a petition once created on Liberty
                                    due to the nature of the working of the blockchain.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span class="text-xl font-semibold text-purple-500">?</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-xl font-semibold text-purple-500">
                                    Can I sign a petition only once?
                                </p>
                                <p class="mt-4 text-base text-gray-400">
                                    Yes! You can only sign a petition once. Duplicate signing is not
                                    allowed on Liberty. We encourage users to respect the right to
                                    liberty.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span class="text-xl font-semibold text-purple-500">?</span>
                            </div>
                            <div class="ml-4">
                                <p class="text-xl font-semibold text-purple-500">
                                    Is Liberty anonymous?
                                </p>
                                <p class="mt-4 text-base text-gray-400">
                                    Liberty is completely anonymous and decentralized. All the data
                                    is stored on the blockchain and we collect no user data.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-12 md:mt-20">
                        <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                            <p class="flex gap-1 text-gray-50">
                                Didn’t find the answer you are looking for?{" "}
                                <div class="text-purple-500">Contact our support</div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Help;
