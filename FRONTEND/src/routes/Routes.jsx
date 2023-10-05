import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Escala from "../pages/Escala/Escala";
import ManageRoundsPage from "../pages/ManageRounds/ManageRounds";

const Routering = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/escala",
        element: <Escala />,
    },
    {
        path: "/manage-rounds",
        element: <ManageRoundsPage />,
    },
]);

export default Routering;
