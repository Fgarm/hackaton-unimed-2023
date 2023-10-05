import { useNavigate } from "react-router-dom";

import { Calendar } from "antd";
import { useEffect, useState } from "react";
import "./styles.css";
import SideBar from "../../components/SideBar";

export default function Home() {
    const navigate = useNavigate();
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
        setMes(numeroMes[value.$M]);
    };

    useEffect(() => {}, []);
    return (
        <div className="home">
            <SideBar />
            <div className="calendar">
                <h1>Agenda do Mês de {mes}</h1>
                <Calendar onPanelChange={onPanelChange} />

                <div className="horarios">
                    <h2>8 de Setembro</h2>
                    <div className="horarios-dia">
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button>Avisar Ausencia</button>
                        </div>
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button>Avisar Ausencia</button>
                        </div>
                        <div className="hora">
                            <p>07:00 as 13:00</p>
                            <button>Avisar Ausencia</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
