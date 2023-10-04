import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/Errors/error-page";
import Routes from "./routes/Routes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Routes />,
        errorElement: <ErrorPage />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
