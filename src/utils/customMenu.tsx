import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, MonitorOutlined, 
  BgColorsOutlined, CodeSandboxOutlined,
  DeploymentUnitOutlined, UngroupOutlined, GroupOutlined,
  MoneyCollectOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import router from 'next/router'
import Head from 'next/head';

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
        <Head>
          <title>Business Web</title>
          <link rel="icon" href="favicon.png" />
        </Head>

        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            Business Web 1.0
          </div>
          <Menu
            theme="dark"
            mode="inline"
            //defaultSelectedKeys={['colors']}
            onClick={ev => onRoute(ev.key)}
            items={[{
              key: 'group-stock',
              icon: <CodeSandboxOutlined />,
              label: 'Estoque',
              children: [{ 
                key: 'colors',
                icon: <BgColorsOutlined />,
                label: 'Cores',
              }, {
                key: 'units',
                icon: <DeploymentUnitOutlined />,
                label: 'Unidades'
              }, {
                key: 'categorys',
                icon: <UngroupOutlined />,
                label: 'Categorias'
              }, {
                key: 'groups',
                icon: <GroupOutlined />,
                label: 'Grupos'
              }]
            }, {
              key: 'group-finance',
              icon: <MoneyCollectOutlined />,
              label: 'Financeiro',
            }, {
              key: 'group-fiscal',
              icon: <MonitorOutlined />,
              label: 'Fiscal',
            }]}
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
            }}>
            { props.children }
          </Content>
        </Layout>
      </Layout>
    )
}