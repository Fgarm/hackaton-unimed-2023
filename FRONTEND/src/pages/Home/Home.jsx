import { useNavigate } from "react-router-dom";

import { Badge, Calendar } from "antd";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import ModalAvisar from "../../components/ModalAvisar/ModalAvisar";
import "./styles.css";
import ModalGerarToken from "../../components/ModalGerarToken/ModalGerarToken";

const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: "Horario",
                    content: "Horário: 07:00 - 13:00  ",
                },
                {
                    type: "Horario",
                    content: "Horário: 13:00 - 19:00  ",
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: "Horario",
                    content: "Horário: 19:00 - 07:00  ",
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: "Horario",
                    content: "Horário: 13:00 - 19:00  ",
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
    const [modalGerarToken, setModalGerarToken] = useState(false);
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
    function getPlantaos() {
        // await Promise.all(
        //     axios.get().then((res) => {
        //console.log(res.data);
        var listPlantaos = [
            {
                data: "2023-04-29",
                inicio: 780,
                final: 1900,
                valido: true,
                funcionario: 1,
                escala: "51d22dad-4717-4edd-8ebe-2818b68cb541",
            },
            {
                data: "2023-04-29",
                inicio: 780,
                final: 1900,
                valido: true,
                funcionario: 1,
                escala: "51d22dad-4717-4edd-8ebe-2818b68cb541",
            },
            {
                data: "2023-04-30",
                inicio: 780,
                final: 1900,
                valido: true,
                funcionario: 2,
                escala: "51d22dad-4717-4edd-8ebe-2818b68cb541",
            },
            {
                data: "2023-04-31",
                inicio: 780,
                final: 1900,
                valido: true,
                funcionario: 2,
                escala: "51d22dad-4717-4edd-8ebe-2818b68cb541",
            },
        ];

        const transformedPlantaos = {
            // tendeu
        };

        // for (var key in transformedPlantaos) {
        //     console.log(key);
        // }

        for (let index = 0; index < listPlantaos.length; index++) {
            const plantao = listPlantaos[index];
            // data: "2023-01-01",
            // inicio: 0
            // final: 190000
            // funcionario: 1
            // escala: "id_escala_UUID"

            const date = new Date(plantao.data);

            const hours_init = Math.floor(plantao.inicio / 3600);
            const minutes_init = Math.floor((plantao.inicio % 3600) / 60);

            const init_plantao = `${hours_init}:${minutes_init}`;

            const hours_final = Math.floor(plantao.final / 3600);
            const minutes_final = Math.floor((plantao.final % 3600) / 60);

            const final_plantao = `${hours_final}:${minutes_final}`;

            if (
                transformedPlantaos.hasOwnProperty(
                    (date.getDate() + 1).toString()
                )
            ) {
                transformedPlantaos[(date.getDate() + 1).toString()].push({
                    type: `${init_plantao} - ${final_plantao}`,
                    content: `ID medico: ${plantao.funcionario}`,
                });
            } else {
                transformedPlantaos[(date.getDate() + 1).toString()] = [];
                transformedPlantaos[(date.getDate() + 1).toString()].push({
                    type: `${init_plantao} - ${final_plantao}`,
                    content: `ID medico: ${plantao.funcionario}`,
                });
            }
            //}
        }
        console.log(transformedPlantaos);
        setParsedPlantoes(transformedPlantaos);
        // })
        //)
    }

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
    function closeModalToken() {
        setModalGerarToken(false);
        navigate("/escala");
    }

    useEffect(() => {}, []);

    function abrirModalGeralToken() {
        setModalGerarToken(true);
    }
    return (
        <div className="home">
            <SideBar abrirModalGeralToken={abrirModalGeralToken} />
            <div className="calendar">
                <h1>Agenda do Mês de {mes}</h1>
                {modal && <ModalAvisar fecharModal={closeModal} />}
                {modalGerarToken && (
                    <ModalGerarToken fecharModal={closeModalToken} />
                )}

                {!modalGerarToken && !modal && (
                    <Calendar
                        onPanelChange={onPanelChange}
                        onSelect={onSelect}
                        cellRender={cellRender}
                    />
                )}

                <div className="horarios">
                    <h2>8 de Outubro</h2>
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
                            <p>13:00 as 19:00</p>
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
