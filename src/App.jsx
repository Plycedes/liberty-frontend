import { CreatePetition, Sidebar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <div className="flex">
                <div className="w-1/6">
                    <Sidebar />
                </div>
                <div className="w-5/6 h-screen overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default App;

