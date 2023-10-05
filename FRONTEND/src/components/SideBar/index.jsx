import { useNavigate } from "react-router-dom";
import "./style.css";

import React from "react";

export default function SideBar({ abrirModalGeralToken }) {
    const navigate = useNavigate();

    return (
        <div className="side-bar">
            <div className="options">
                <a>Meus Horarios</a>
                <a onClick={abrirModalGeralToken}>Definir Escala</a>
            </div>
        </div>
    );
}
