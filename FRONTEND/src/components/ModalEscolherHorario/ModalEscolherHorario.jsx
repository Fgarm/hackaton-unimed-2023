import React from "react";

import "./style.css";
export default function ModalEscolherHorario({ fecharModal }) {
    return (
        <div className="modal-escolher">
            <div className="modal-escolher-container">
                <h2>Defina o Horário</h2>
                <div className="modal-botoes">
                    <div className="input-label">
                        <input type="checkbox" />
                        <label htmlFor="">07:00 - 13:00</label>
                    </div>
                    <div className="input-label">
                        <input type="checkbox" />
                        <label htmlFor="">13:00 - 19:00</label>
                    </div>
                    <div className="input-label">
                        <input type="checkbox" />
                        <label htmlFor="">19:00 - 07:00</label>
                    </div>
                </div>
                <button onClick={fecharModal}>Confirmar</button>
            </div>
        </div>
    );
}
