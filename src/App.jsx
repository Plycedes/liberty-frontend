import { CreatePetition, Sidebar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <div className="flex">
                <div className="w-2/5">
                    <Sidebar />
                </div>
                <div className="w-3/5">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default App;

