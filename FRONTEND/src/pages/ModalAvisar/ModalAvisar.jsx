import React from "react";

import "./styles.css";

export default function ModalAvisar({ fecharModal }) {
    return (
        <div className="modal-avisar">
            <div className="modal-avisar-container">
                <h2>Possui Algum Substituto?</h2>
                <div className="modal-botoes">
                    <button onClick={fecharModal}>Sim</button>
                    <button onClick={fecharModal}>Não Possuo</button>
                </div>
            </div>
        </div>
    );
}
