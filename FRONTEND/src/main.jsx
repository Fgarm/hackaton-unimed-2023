import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routering from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.StrictMode>
            <RouterProvider router={Routering} />
        </React.StrictMode>
    </React.StrictMode>
);
