import React from "react";

import "./styles.css";

export default function ModalAguardandoRodada({ closeModal }) {
    return (
        <div className="modal-espera">
            <div className="modal-espera-container">
                <h2>Aguardando Próxima Rodada</h2>
                <div className="modal-espera-botoes">
                    <button onClick={closeModal}>Finalizar Escolhas</button>
                </div>
            </div>
        </div>
    );
}
