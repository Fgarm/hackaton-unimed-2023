import React from "react";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ModalGerarToken({ fecharModal }) {
    const navigate = useNavigate();

    return (
        <div className="modal-avisar">
            <div className="modal-avisar-container">
                <h2>Possui Algum Substituto?</h2>
                <div className="modal-botoes">
                    <button onClick={() => navigate("escala")}>
                        Gerar Token de Acesso
                    </button>
                </div>
            </div>
        </div>
    );
}
