import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            Welcome
            <Link to="app/">
                <button>Go to Home</button>
            </Link>
        </div>
    );
}

export default Welcome;
