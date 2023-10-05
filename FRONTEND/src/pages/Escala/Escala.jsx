import React, { useState } from "react";

import "./styles.css";
import { Badge, Button, Calendar, Radio, Modal } from "antd";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { Badge, Calendar } from "antd";
import { useNavigate } from "react-router-dom";
import ModalAguardandoRodada from "../../components/ModalAguardandoRodada/ModalAguardandoRodada";
import "./styles.css";

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const horaInString = {
    "07:00 - 13:00": { horaInicio: ((7 * 60) * 60), horaFinal: ((13 * 60) * 60) },
    "13:30 - 19:00": { horaInicio: ((13 * 60) * 60), horaFinal: ((19 * 60) * 60) },
    "19:00 - 07:00": { horaInicio: (19 * 60) * 60, horaFinal: (7 * 60) * 60 }

}

export default function Escala() {
    const [diaSelecionado, setDiaSelecionado] = useState([]);
    const [modalEspera, setModalEspera] = useState(false);
    const navigate = useNavigate();

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    //console.log(params.get("id"));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [horario, setHorario] = useState("07:00 - 13:00");
    const [dataPlantao, setData] = useState("");
    const [horaInicioFinal, sethoraInicioFinal] = useState({});

    const [diasSelecionados, setdiasSelecionados] = useState([]);

    const showModal = (date) => {
        const newArray = diasSelecionados;
        newArray.push(date.$D);
        setdiasSelecionados(newArray);

        setData(date.format('YYYY-MM-DD'));

        setIsModalOpen(true);
    };

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


    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    function getHorarios(dia) {
        var aux = diasSelecionados.includes(dia);
        var list;
        switch (aux) {
            case true:
                list = [
                    {
                        type: "Horario",
                        content: "Marcado",
                    },
                ];
                break;
            default:
        }

        return list || [];
    }

    function cellrender(current, info) {
        if (info.type === "month") return monthCellRender(current);
        if (info.type === "date") return dateCellRender(current);
        return info.originNode;
    }

    async function postPlantao() {
        console.log(horaInicioFinal);

        const plantao = {
            escala: params.get("id"),
            funcionario: 1,
            inicio: horaInicioFinal.horaInicio,
            final: horaInicioFinal.horaFinal,
            data: dataPlantao
        };

        const response = await fetch("http://localhost:8000/horario/criar-horario/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(plantao), // body data type must match "Content-Type" header
        });

        console.log(response);
    }

    const [placement, SetPlacement] = useState('07:00 - 13:00');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    const handleChange = event => {
        setHorario(event.target.value);
    };

    useEffect(() => {
        //setHorario(horario);
        const horaInSeconds = horaInString[horario]
        sethoraInicioFinal(horaInSeconds);
    }, [horario]);

    return (
        <div className="escala">
            <Modal title="Defina o Horário" open={isModalOpen} onOk={handleOk}>
                <Radio.Group value={placement} onChange={placementChange}>
                    <Radio.Button value="07:00 - 13:00" onChange={handleChange}>07:00 - 13:00</Radio.Button>
                    <Radio.Button value="13:30 - 19:00" onChange={handleChange}>13:30 - 19:00</Radio.Button>
                    <Radio.Button value="19:00 - 07:00" onChange={handleChange}>19:00 - 07:00</Radio.Button>
                </Radio.Group>
            </Modal>

            <h1>Escolhar Seus Horários</h1>
            {modalEspera && <ModalAguardandoRodada closeModal={closeModal} />}
            <div>
                <Calendar cellRender={cellrender} onSelect={showModal} />
                <button className="gerar-token" onClick={postPlantao}>
                    Salvar
                </button>
            </div>
        </div>
    );
}
