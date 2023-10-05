import React, { useState } from "react";

import { Badge, Calendar } from "antd";
import { useNavigate } from "react-router-dom";
import ModalAguardandoRodada from "../../components/ModalAguardandoRodada/ModalAguardandoRodada";
import ModalEscolherHorario from "../../components/ModalEscolherHorario/ModalEscolherHorario";
import "./styles.css";

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export default function Escala() {
    const [modal, setModal] = useState(false);
    const [diaSelecionado, setDiaSelecionado] = useState([]);
    const [modalEspera, setModalEspera] = useState(false);
    const navigate = useNavigate();

    function getHorarios(dia) {
        var aux = diaSelecionado.includes(dia);
        var list;
        switch (aux) {
            case true:
                list = [
                    {
                        type: "Horario",
                        content: "Dr. Carlos 07:00 - 13:00  ",
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
    function openModal() {
        console.log(modalEspera)
        setModalEspera(true);
    }

    function closeModal() {
        setModalEspera(false);
        navigate('/')
    }

    function verificaNumeroDeEscolhas() {
        if (diaSelecionado.length > 2) {
            openModal();
        }
    }

    return (
        <div className="escala">
            {modal && <ModalEscolherHorario fecharModal={fecharModal} />}
            <h1>Escolhar Seus Horários</h1>
            {modalEspera && <ModalAguardandoRodada closeModal={closeModal} />}
            <div>
                {!modalEspera && !modal && (
                    <Calendar cellRender={cellrender} onSelect={onSelect} />
                )}
            </div>
        </div>
    );
}
