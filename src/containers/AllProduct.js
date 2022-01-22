


import React, { useState } from "react";
import { Layout, Breadcrumb } from 'antd';
import { Statistic, Row, Col, Card } from 'antd';
import { Progress } from 'antd';
import { Table, Tag, Space } from 'antd';
import SideBar from "../components/SideBar";
import Footer1 from "../components/Footer";
import "./Dashboard.css";
import 'antd/dist/antd.min.css';
import  { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts} from '../redux/actions/productActions';

const { Header, Content } = Layout;


const AllProduct = () => {

  const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();


    const fatchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) =>{
            console.log("err",err);
        });
            dispatch(setProducts(response.data));
    };

        useEffect(() => {
            fatchProducts();
        },[])



    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
        },
        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'category',
          key: 'category',
          dataIndex: 'category',

        },

        {
          title: 'image',
          key: 'image',
          render: (text, record) => (
            <Space size="middle">
             <img src={record.image} width='50px'/>
            </Space>
          ),
        },

        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Edit </a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];


      const data = products;

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item> All Product</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        All Product
                        <br />
                        <br />
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Content>
                <Footer1 />
            </Layout>
        </Layout>
    );
};

export default AllProduct;