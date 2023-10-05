import React from 'react';
import './styles.css';
import { Calendar, Layout, Space, Button, Divider, List, Typography, Avatar, Col, Row } from 'antd';
import Home from "../../pages/Home/Home";
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;


const scaleStyle = {
    // textAlign: 'center',
    // height: 64,
    // paddingInline: 50,
    // lineHeight: '64px',
    position: 'relative',
};

const navigateButtonsScaleStyle = {
    // textAlign: 'center',
    // // minHeight: 120,
    // // lineHeight: '120px',
    // top: '100px',
    // color: '#fff',
    // backgroundColor: '#108ee9',
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

export default function ManageRoundsPage() {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
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
                <Calendar style={scaleStyle} onPanelChange={onPanelChange} />
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