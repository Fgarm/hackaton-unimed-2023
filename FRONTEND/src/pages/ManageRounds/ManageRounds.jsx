import { React, useState, useEffect } from "react";
import "./styles.css";
import {
    Calendar,
    Badge,
    Layout,
    Space,
    Button,
    Divider,
    List,
    Typography,
    Avatar,
    Col,
    Row,
} from "antd";
import Home from "../../pages/Home/Home";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const schedule = {
    firstMonth: {
        "2023-08-05": [
            { hours: "7:00 - 13:00", content: "Dr. Roberto" },
            { hours: "13:00 - 19:00", content: "Dr. Carlos" },
            { hours: "19:00 - 7:00", content: "Dr. Rodrigo" },
        ],
        "2023-08-06": [{ hours: "7:00 - 13:00", content: "Dr. Leandro" }],
    },
    secondMonth: {
        "2023-09-05": [
            { hours: "7:00 - 13:00", content: "Dr. Silvio" },
            { hours: "13:00 - 19:00", content: "Dr. Carlos" },
            { hours: "19:00 - 7:00", content: "Dr. Nome" },
        ],
        "2023-09-06": [{ hours: "7:00 - 13:00", content: "Dr. Nome" }],
    },
    thridMonth: {
        "2023-10-05": [
            { hours: "7:00 - 13:00", content: "Dr. Nome" },
            { hours: "13:00 - 19:00", content: "Dr. Nome" },
            { hours: "19:00 - 7:00", content: "Dr. Nome" },
        ],
        "2023-10-06": [{ hours: "7:00 - 13:00", content: "Dr. Nome" }],
    },
};

const scaleStyle = {
    position: "relative",
};

const navigateButtonsScaleStyle = {
    paddingTop: "5px",
    position: "relative",
};

const doctorsListStyle = {
    paddingTop: "5px",
};

const data = [
    {
        title: "Dr. Roberto",
    },
    {
        title: "Dr. Carlos",
    },
    {
        title: "Dr. Pedro",
    },
    {
        title: "Dr. Lucas",
    },
];

const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export default function ManageRoundsPage() {
    // const onPanelChange = (value, mode) => {
    //     console.log(value.format('YYYY-MM-DD'), mode);
    // };

    // const createSchedule = () => {
    //     axios.post("http://localhost:6667/doctors/").then((res) => {
    //         console.log(res.data);
    //     });
    // }

    const navigate = useNavigate();

    const [mes, setMes] = useState("Janeiro");

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

    useEffect(() => {
        if (run) {
            getPlantaos();
        }
        setRun(false);
    }, mes);

    const [parsedPlantoes, setParsedPlantoes] = useState({});
    const [run, setRun] = useState(true);
    const getListData = (value) => {
        let listData;

        for (var dateKey in parsedPlantoes) {
            if (value.date().toString() == dateKey.toString()) {
                listData = parsedPlantoes[dateKey.toString()];
                //console.log(parsedPlantoes[dateKey.toString()]);
                setMes(parsedPlantoes[dateKey.toString()].month);
                return listData;
            }
        }

        return listData || [];
    };

    async function getPlantaos() {
        // const plantaos = {
        //     //escala: params.get("id"),
        //     escala: "123"
        // };

        // const response = await fetch("http://localhost:8000/horario/obter-horarios-escala/", {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(plantaos), // body data type must match "Content-Type" header
        // });

        // var listPlantaos;

        // response.then((value) => {
        //     listPlantaos = value;
        //   });

        var listPlantaos = [{ "data": "2023-04-29", "inicio": 46800, "final": 68400, "valido": true, "funcionario": 1, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-29", "inicio": 25200, "final": 46800, "valido": true, "funcionario": 1, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-30", "inicio": 46800, "final": 68400, "valido": true, "funcionario": 2, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-31", "inicio": 46800, "final": 68400, "valido": true, "funcionario": 2, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }];
        //console.log(response.json());

        const transformedPlantaos = {
        }

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

            const month = date.getMonth() + 1;

            //setMes(numeroMes[month]);

            if (transformedPlantaos.hasOwnProperty((date.getDate() + 1).toString())) {
                transformedPlantaos[(date.getDate() + 1).toString()].push({ type: `${init_plantao} - ${final_plantao}`, content: `Dr. ${plantao.funcionario}`, month: `${numeroMes[month]}` });

            } else {
                transformedPlantaos[(date.getDate() + 1).toString()] = [];
                transformedPlantaos[(date.getDate() + 1).toString()].push({ type: `${init_plantao} - ${final_plantao}`, content: `Dr.: ${plantao.funcionario}`, month: `${numeroMes[month]}` });
            }

            // if (transformedPlantaos.hasOwnProperty((date.getMonth + 1).toString())) {
            //     if (transformedPlantaos[(date.getMonth + 1).toString()].hasOwnProperty((date.getDate() + 1).toString())) {
            //         transformedPlantaos[(date.getMonth() + 1).toString()][(date.getDate() + 1).toString()].push({ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` });
            //     } else {
            //         var keyDay = (date.getDate() + 1).toString();
            //         transformedPlantaos[(date.getMonth() + 1).toString()][keyDay] = [{ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` }];
            //         //transformedPlantaos[(date.getMonth() + 1).toString()].push({ keyDay: [{ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` }] });
            //     }
            // } else {
            //     transformedPlantaos[(date.getMonth() + 1).toString()] = [];
            //     var keyDay = (date.getDate() + 1).toString();
            //     //transformedPlantaos[(date.getMonth() + 1).toString()].push({ keyDay: [{ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` }] });
            //     transformedPlantaos[(date.getMonth() + 1).toString()][keyDay] = [{ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` }];
            // }

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
        console.log(date.$D);
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
                        <Badge
                            status={item.type}
                            text={item.type + " - " + item.content}
                        />
                    </li>
                ))}
            </ul>

            // Tenho que fazer o display de todos plantoes de um dia de uma vez
            // Teria que arrumar os dados para:
            // dia x:
            // plantao 1
            // plantao 2
            // dia y:
            // plantao 1
            // plantao 2
            // Mas tenho:
            // dia x, plantao 1
            // dia y, plantao 1
            // dia x, plantao 2
        );
    };

    const cellRender = (current, info) => {
        if (info.type === "date") return dateCellRender(current);
        if (info.type === "month") return monthCellRender(current);
        return info.originNode;
    };

    function closeModal(){
        navigate("/");
    }

    return (
        <div className="escala-tela">
            <SideBar abrirModalGeralToken={closeModal} />
            {/* <Row>
                <Col span={18} push={6}>
                    <div>
                        <a>Meus Horarios</a>
                        <a>Entrar em uma escala</a>
                    </div>
                </Col>
                <Col span={6} pull={18}> */}
            <Space
            className="space-container"
                direction="vertical"
                style={{
                    width: "100%",
                }}
                align="center"
                size={[0, 48]}
            >
                <h1>Escala Plantão</h1>
                <Calendar
                    style={scaleStyle}
                    onPanelChange={onPanelChange}
                    onSelect={onSelect}
                    cellRender={cellRender}
                />
                <Space wrap style={navigateButtonsScaleStyle}>
                    <Button size="large">Mês anterior</Button>
                    <Button size="large">Próxima rodada</Button>
                    <Button size="large">Próximo mês</Button>
                </Space>
                <Space wrap style={doctorsListStyle}>
                    {/* <List
                        header={<div>Médicos</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Avatar size={64} icon={<UserOutlined />} /> {item}
                            </List.Item>
                        )}
                    /> */}
                    <List
                        header={<h3>Médicos</h3>}
                        itemLayout="horizontal"
                        dataSource={data}
                        style={{ width: "900px", fontSize: "large" }}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                                        />
                                    }
                                    title={
                                        <a href="https://ant.design" style={{ fontSize: "medium" }}>
                                            {item.title}
                                        </a>
                                    }
                                    description="Aguardando..."
                                />
                            </List.Item>
                        )}
                    />
                </Space>
                {/* </Layout> */}
            </Space>
            {/* </Col>
            </Row> */}
        </div>
    );
}
