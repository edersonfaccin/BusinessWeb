import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import router from 'next/router'

const { Header, Sider, Content } = Layout;
  
export default function CustomMenu(props: any) {
  
    const [collapsed, setCollapsed] = useState(false);

    const onRoute = (urlRoute: string) => {
      router.push({
        pathname: urlRoute
      })
    }
    
    return (
        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['colors']}
                onClick={ev => onRoute(ev.key)}
                items={[
                  {
                    key: 'colors',
                    icon: <UserOutlined />,
                    label: 'Cores',
                  },
                  {
                    key: 'units',
                    icon: <VideoCameraOutlined />,
                    label: 'Unidades',
                  },
                  {
                    key: 'categories',
                    icon: <UploadOutlined />,
                    label: 'Categorias',
                  },{
                    key: 'groups',
                    icon: <UploadOutlined />,
                    label: 'Grupos',
                  }
                ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                }}
            >
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24
                }}
            >
              { props.children }
            </Content>
          </Layout>
        </Layout>
    )
}