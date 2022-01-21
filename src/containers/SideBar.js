


import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import {
  ShopOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
import "./Astyle.css";
import 'antd/dist/antd.min.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
    const [collapsed,setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<ShopOutlined />}>
              Store
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileAddOutlined />} title="Product">
              <Menu.Item key="3">All</Menu.Item>
              <Menu.Item key="4">Create</Menu.Item>
              <Menu.Item key="5">Category</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

    );
};

export default SideBar;