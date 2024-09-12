import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Welcome from "./Welcome.jsx";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { Dashboard, CreatePetition } from "./components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="" element={<Welcome />} />
            <Route path="app/" element={<App />}>
                <Route path="" element={<Dashboard />} />
                <Route path="create-petition" element={<CreatePetition />} />
            </Route>
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);

