import { CreatePetition, Sidebar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}

export default App;

