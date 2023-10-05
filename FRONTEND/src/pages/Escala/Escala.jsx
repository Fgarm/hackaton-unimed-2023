import React, { useEffect, useState } from "react";

import "./styles.css";
import { Badge, Button, Calendar } from "antd";
import ModalEscolherHorario from "../../components/ModalEscolherHorario/ModalEscolherHorario";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export default function Escala() {
    const [modal, setModal] = useState(false);
    const [diaSelecionado, setDiaSelecionado] = useState([]);
    const navigate = useNavigate();

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    //console.log(params.get("id"));

    function getHorarios(dia) {
        var aux = diaSelecionado.includes(dia);
        var list;
        switch (aux) {
            case true:
                list = [
                    {
                        type: "Horario",
                        content: "Plantão as 07:00",
                    },
                ];
                break;
            default:
        }

        return list || [];
    }

    function fecharModal() {
        setModal(false);
        verificaNumeroDeEscolhas();
    }

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getHorarios(value.$D);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    function cellrender(current, info) {
        if (info.type === "month") return monthCellRender(current);
        if (info.type === "date") return dateCellRender(current);
        return info.originNode;
    }

    function onSelect(date, info) {
        setModal(true);
        const newarray = diaSelecionado;
        newarray.push(date.$D);
        setDiaSelecionado(newarray);
        console.log(diaSelecionado);
    }

    function verificaNumeroDeEscolhas() {
        if (diaSelecionado.length > 2) {
            navigate("/");
        }
    }

    async function postPlantao() {

        const plantao = {
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
            body: JSON.stringify(plantao), // body data type must match "Content-Type" header
        });

        //navigate(`/escala/?id=${codigoEscala}`);
    }

    return (
        <div className="escala">
            {modal && <ModalEscolherHorario fecharModal={fecharModal} />}
            <h1>Escolhar Seus Horários</h1>
            <div>
                {!modal && (
                    <Calendar cellRender={cellrender} onSelect={onSelect} />
                )}
                {!modal && (
                    <button className="gerar-token" onClick={postPlantao}>
                        Salvar
                    </button>
                )}
            </div>
        </div>
    );
}
