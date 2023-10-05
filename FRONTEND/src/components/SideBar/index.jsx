import { useNavigate } from "react-router-dom";
import { Image } from 'antd';
import "./style.css";

import React from "react";

export default function SideBar({ abrirModalGeralToken }) {
    const navigate = useNavigate();

    return (
        <div className="side-bar">
            <div className="options">
                <h1 style={{color: "white", marginBottom: "20px"}}>EscalaMed</h1>
                <a onClick={abrirModalGeralToken}>Meus Horarios</a>
                <a onClick={abrirModalGeralToken}>Definir Escala</a>
                <a onClick={() => navigate("/manage-rounds")}>Supervisor</a>
            </div>
        </div>
    );
}
