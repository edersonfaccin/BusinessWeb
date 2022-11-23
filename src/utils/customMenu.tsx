import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, MonitorOutlined, 
  BgColorsOutlined, CodeSandboxOutlined,
  DeploymentUnitOutlined, UngroupOutlined, GroupOutlined,
  MoneyCollectOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, Typography } from 'antd';
import router from 'next/router'
import Head from 'next/head';
import ForceAuth from '../components/ForceAuth';
import useAuthData from '../data/hook/useAuthData';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;
  
export default function CustomMenu(props: any) {
    const { user, signOut } = useAuthData()

    const [ collapsed, setCollapsed ] = useState(false);

    const onRoute = (urlRoute: string) => {
      router.push({
        pathname: urlRoute
      })
    }
    
    return (
      <ForceAuth>
        <Row justify="center" align="middle" style={{ backgroundColor: '#001529' }}>
            <Col flex={1}>
              <Button 
                type="link" 
                style={{ color: 'white', marginLeft: 10 }}
                onClick={() => onRoute('/buy')}>
                  Comprar creditos
              </Button>
            </Col>
            <Col flex={1} style={{ textAlign: 'right' }}>
              <Button 
                type="link" 
                style={{ color: 'white', marginRight: 10 }}
                onClick={() => signOut()}>
                  { `${user?.name}, sair` }
              </Button>
            </Col>
        </Row>
        <Layout className="layout">
          <Head>
            <title>Block Business</title>
            <link rel="icon" href="favicon.png" />
          </Head>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" style={{
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: 2
            }}>
              <Text strong type="secondary">
                Block Business Web 1.0
              </Text>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['']}
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
      </ForceAuth>
    )
}