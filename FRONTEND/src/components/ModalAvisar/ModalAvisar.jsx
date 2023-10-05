import React from "react";

import "./styles.css";

export default function ModalAvisar({ fecharModal }) {
    function naoPossuiSubstituto(){
        fecharModal()
        alert("Seu supervisor foi alertado sobre sua ausencia")
    }
    
    return (
        <div className="modal-avisar">
            <div className="modal-avisar-container">
                <h2>Possui Algum Substituto?</h2>
                <div className="modal-avisar-botoes">
                    <button onClick={fecharModal}>Sim</button>
                    <button onClick={naoPossuiSubstituto}>Não Possuo</button>
                </div>
            </div>
        </div>
    );
}
