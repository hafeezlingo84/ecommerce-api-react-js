


import React, { useState } from "react";
import { Layout, Breadcrumb } from 'antd';
import { Statistic, Row, Col, Card } from 'antd';
import { Progress } from 'antd';
import SideBar from "./SideBar";
import Footer1 from "./Footer";
import "./Astyle.css";
import 'antd/dist/antd.min.css';

const { Header, Content } = Layout;


const Dashboard = () => {

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Dashboard
                        <br />
                        <br />

                        <Row>
                            <Col span={8}>
                                <Card title="Active Users" bordered={true}  style={{margin: "10px"}} >

                                    <Statistic  value={112893} />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Active Product" bordered={true} style={{margin: "10px"}}  >

                                    <Statistic value={1500} />
                                </Card>
                            </Col>
                            <Col span={8}><Card title="Sales Products" bordered={true} style={{margin: "10px"}}  >

                                <Statistic  value={25300} />
                            </Card></Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col span={12}>

                                <Card title="Bar Product" bordered={true} style={{margin: "10px"}}  >
                                    <Progress percent={30} />
                                    <Progress percent={50} status="active" />
                                    <Progress percent={70} status="exception" />
                                    <Progress percent={100} />
                                    <Progress percent={50} showInfo={false} />
                                </Card>

                            </Col>
                            <Col span={12}>

                                <Card title="Pi Product Progress" bordered={true} style={{margin: "10px"}}  >
                                    <Progress type="circle" percent={75} />
                                    <Progress type="circle" percent={70} status="exception" />
                                    <Progress type="circle" percent={100} />

                                </Card>

                            </Col>

                            <Col span={12}>

                                <Card title="Bar & Pi Product" bordered={true} style={{margin: "10px"}}  >
                                    <Progress
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={99.9}
                                    />
                                    <Progress
                                        strokeColor={{
                                            from: '#108ee9',
                                            to: '#87d068',
                                        }}
                                        percent={99.9}
                                        status="active"
                                    />
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={90}
                                    />
                                    <Progress
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={100}
                                    />

                                </Card>

                            </Col>

                            <Col span={12}>

                                <Card title="Sales Product" bordered={true} style={{margin: "10px"}}  >
                                    <Progress percent={50} steps={3} />
                                    <br />
                                    <Progress percent={30} steps={5} />
                                    <br />
                                    <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />

                                </Card>

                            </Col>



                        </Row>

                    </div>
                </Content>
                <Footer1 />
            </Layout>
        </Layout>
    );
};

export default Dashboard;