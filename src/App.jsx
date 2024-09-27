import { Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { getPetitions } from "./utils/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPetitons } from "./features/petitionSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const response = await getPetitions();
                dispatch(addPetitons(response));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
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

