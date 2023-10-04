import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Escala from "../pages/Escala/Escala";

const Routering = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/escala",
        element: <Escala />,
    },
]);

export default Routering;
