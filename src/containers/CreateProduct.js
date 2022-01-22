


import React, { useState } from "react";
import { Layout, Breadcrumb } from 'antd';
import { Statistic, Row, Col, Card } from 'antd';
import { Progress } from 'antd';
import SideBar from "../components/SideBar";
import Footer1 from "../components/Footer";
import "./Dashboard.css";
import 'antd/dist/antd.min.css';

const { Header, Content } = Layout;


const CreateProdut = () => {

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>Create Product</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Create Product
                        <br />
                        <br />
                    </div>
                </Content>
                <Footer1 />
            </Layout>
        </Layout>
    );
};

export default CreateProdut;