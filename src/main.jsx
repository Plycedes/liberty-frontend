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
import { Dashboard, CreatePetition, Profile, Leaderboard, Help, ContactUs } from "./components";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="" element={<Welcome />} />
            <Route path="app/" element={<App />}>
                <Route path="" element={<Dashboard />} />
                <Route path="create-petition" element={<CreatePetition />} />
                <Route path="profile" element={<Profile />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="help" element={<Help />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Route>
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
);

