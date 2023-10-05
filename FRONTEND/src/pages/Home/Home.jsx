import { useNavigate } from "react-router-dom";

import { Badge, Calendar } from "antd";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import ModalAvisar from "../ModalAvisar/ModalAvisar";
import "./styles.css";

const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: "warning",
                    content: "This is warning event.",
                },
                {
                    type: "success",
                    content: "This is usual event.",
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: "warning",
                    content: "This is warning event.",
                },
                {
                    type: "success",
                    content: "This is usual event.",
                },
                {
                    type: "error",
                    content: "This is error event.",
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: "warning",
                    content: "This is warning event",
                },
                {
                    type: "success",
                    content: "This is very long usual event......",
                },
                {
                    type: "error",
                    content: "This is error event 1.",
                },
                {
                    type: "error",
                    content: "This is error event 2.",
                },
                {
                    type: "error",
                    content: "This is error event 3.",
                },
                {
                    type: "error",
                    content: "This is error event 4.",
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
export default function Home() {
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [mes, setMes] = useState("Outubro");
    const numeroMes = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro",
    };
    const onPanelChange = (value) => {
        setMes(numeroMes[value.$M + 1]);
    };

    function onSelect(date, info) {
        console.log(date.$M, info);
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
        const listData = getListData(value);
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
        if (info.type === "date") return dateCellRender(current);
        if (info.type === "month") return monthCellRender(current);
        return info.originNode;
    };

    function closeModal() {
        setModal(false);
    }

    useEffect(() => {}, []);

    return (
        <div className="home">
            <SideBar />
            <div className="calendar">
                <h1>Agenda do Mês de {mes}</h1>
                {modal && <ModalAvisar fecharModal={closeModal} />}

                {!modal && (
                    <Calendar
                        onPanelChange={onPanelChange}
                        onSelect={onSelect}
                        cellRender={cellRender}
                    />
                )}

                <div className="horarios">
                    <h2>8 de Setembro</h2>
                    <div className="horarios-dia">
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button
                                onClick={() => {
                                    setModal(true);
                                    console.log(modal);
                                }}
                            >
                                Avisar Ausencia
                            </button>
                        </div>
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button onClick={() => setModal(true)}>
                                Avisar Ausencia
                            </button>
                        </div>
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button onClick={() => setModal(true)}>
                                Avisar Ausencia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
