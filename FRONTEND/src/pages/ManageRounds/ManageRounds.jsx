import { React, useState, useEffect } from 'react';
import './styles.css';
import { Calendar, Badge, Layout, Space, Button, Divider, List, Typography, Avatar, Col, Row } from 'antd';
import Home from "../../pages/Home/Home";
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Footer, Sider, Content } = Layout;

const schedule = {
    "firstMonth": {
        "2023-08-05": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
            { hours: '13:00 - 19:00', content: 'Dr. Nome' },
            { hours: '19:00 - 7:00', content: 'Dr. Nome' },
        ],
        "2023-08-06": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
        ]
    },
    "secondMonth": {
        "2023-09-05": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
            { hours: '13:00 - 19:00', content: 'Dr. Nome' },
            { hours: '19:00 - 7:00', content: 'Dr. Nome' },
        ],
        "2023-09-06": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
        ]
    },
    "thridMonth": {
        "2023-10-05": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
            { hours: '13:00 - 19:00', content: 'Dr. Nome' },
            { hours: '19:00 - 7:00', content: 'Dr. Nome' },
        ],
        "2023-10-06": [
            { hours: '7:00 - 13:00', content: 'Dr. Nome' },
        ]
    }
}

const scaleStyle = {
    position: 'relative',
};

const navigateButtonsScaleStyle = {
    paddingTop: '20px',
    position: 'relative',
};

const doctorsListStyle = {
    paddingTop: '10px',
};

const data = [
    {
        title: 'Dr. Nome',
    },
    {
        title: 'Dr. Nome',
    },
    {
        title: 'Dr. Nome',
    },
    {
        title: 'Dr. Nome',
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

    useEffect(() => {
        if (run) {
            getPlantaos();
        }
        setRun(false);
    });

    const [parsedPlantoes, setParsedPlantoes] = useState({});
    const [run, setRun] = useState(true);

    const getListData = (value) => {
        let listData;

        for (var dateKey in parsedPlantoes) {
            if (value.date().toString() == dateKey.toString()) {
                listData = parsedPlantoes[dateKey.toString()];
                return listData;
            }
        }
        // switch (value.date()) {
        //     case 8:
        //         listData = [
        //             {
        //                 type: "warning",
        //                 content: "This is warning event.",
        //             },
        //             {
        //                 type: "success",
        //                 content: "This is usual event.",
        //             },
        //         ];
        //         break;
        //     default:
        // }

        return listData || [];
    };

    function getPlantaos() {
        // await Promise.all(
        //     axios.get().then((res) => {
        //console.log(res.data);
        var listPlantaos = [{ "data": "2023-04-29", "inicio": 780, "final": 1900, "valido": true, "funcionario": 1, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-29", "inicio": 780, "final": 1900, "valido": true, "funcionario": 1, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-30", "inicio": 780, "final": 1900, "valido": true, "funcionario": 2, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }, { "data": "2023-04-31", "inicio": 780, "final": 1900, "valido": true, "funcionario": 2, "escala": "51d22dad-4717-4edd-8ebe-2818b68cb541" }];

        const transformedPlantaos = {  // tendeu
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

            const hours_init = Math.floor(plantao.inicio / 3600)
            const minutes_init = Math.floor((plantao.inicio % 3600) / 60)

            const init_plantao = `${hours_init}:${minutes_init}`;

            const hours_final = Math.floor(plantao.final / 3600)
            const minutes_final = Math.floor((plantao.final % 3600) / 60)

            const final_plantao = `${hours_final}:${minutes_final}`;

            if (transformedPlantaos.hasOwnProperty((date.getDate() + 1).toString())) {
                transformedPlantaos[(date.getDate() + 1).toString()].push({ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` });

            } else {
                transformedPlantaos[(date.getDate() + 1).toString()] = [];
                transformedPlantaos[(date.getDate() + 1).toString()].push({ type: `${init_plantao} - ${final_plantao}`, content: `ID medico: ${plantao.funcionario}` });
            }
            //}
        }
        console.log(transformedPlantaos);
        setParsedPlantoes(transformedPlantaos);
        // })
        //)
    };

    const [mes, setMes] = useState("Outubro");

    const onPanelChange = (value) => {
        console.log(numeroMes[value.$M] + 1);
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
                        <Badge status={item.type} text={item.type + " - " + item.content} />
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

    return (
        <>
            {/* <Row>
                <Col span={18} push={6}>
                    <div>
                        <a>Meus Horarios</a>
                        <a>Entrar em uma escala</a>
                    </div>
                </Col>
                <Col span={6} pull={18}> */}
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                align='center'
                size={[0, 48]}
            >
                <h1>Escala Plantão</h1>
                <Calendar style={scaleStyle} onPanelChange={onPanelChange} onSelect={onSelect}
                    cellRender={cellRender} />
                <Space wrap style={navigateButtonsScaleStyle}>
                    <Button>Mês anterior</Button>
                    <Button>Próxima rodada</Button>
                    <Button>Próximo mês</Button>
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
                        style={{ width: '700px' }}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Space>
                {/* </Layout> */}
            </Space>
            {/* </Col>
            </Row> */}


        </>);
}