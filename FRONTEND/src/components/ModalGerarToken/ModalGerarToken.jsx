import React from "react";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ModalGerarToken({ fecharModal }) {
    return (
        <div className="modal-token">
            <div className="modal-token-container">
                <h2>Reunião Para Escala de Médicos</h2>
                <div className="modal-token-botoes">
                    <button className="gerar-token" onClick={fecharModal}>
                        Gerar Token de Acesso
                    </button>
                </div>
            </div>
        </div>
    );
}
