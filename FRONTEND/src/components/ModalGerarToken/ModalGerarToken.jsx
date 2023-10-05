import { React, useState } from "react";
import { SettingOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import axios from 'axios';

import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ModalGerarToken() {

    const navigate = useNavigate();

    const [codigoEscala, setcodigoEscala] = useState('');

    const handleChange = event => {
        setcodigoEscala(event.target.value);
    };

    async function postEscala() {

        const escala = {
            codigo: codigoEscala,
            nome: "Escala 1",
            data_comeco: "2023-04-14",
            data_final: "2023-06-14"
        };

        const response = await fetch("http://localhost:8000/escala/criar-escala/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(escala), // body data type must match "Content-Type" header
        });

        navigate(`/escala/?id=${codigoEscala}`);
    }


    return (
        <div className="modal-token">
            <div className="modal-token-container">
                <h2>Reunião Para Escala de Médicos</h2>
                <div className="modal-token-botoes">
                    <Input onChange={handleChange}
                        value={codigoEscala} />
                    <Button className="gerar-token tirar" onClick={postEscala} size="large"> Gerar Token de Acesso</Button>
                    {/* <button >
                        Gerar Token de Acesso
                    </button> */}
                </div>
            </div>
        </div>
    );
}
