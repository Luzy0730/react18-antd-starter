import React, { memo, useEffect, useState } from 'react'
import { useLocation, useRoutes, useNavigate } from 'react-router-dom';
import routes, { blankPages, menus } from '../router/index'
import { Menu, Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

const LayoutWrapper = memo(() => {
  const location = useLocation()
  const navigate = useNavigate();
  const [isBlank, setIsBlank] = useState(false)

  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    display: isBlank ? 'none' : 'block'
  };

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    display: isBlank ? 'none' : 'block'
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    display: isBlank ? 'none' : 'block'
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    height: '100vh'
  };

  useEffect(() => {
    setIsBlank(blankPages.includes(location.pathname))
  }, [location.pathname])

  const onClick = (e) => {
    const link = e.keyPath.reverse().join('/')
    navigate(link);
  };

  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Menu
              onClick={onClick}
              mode="inline"
              items={menus}
            />
          </Sider>
          <Content style={contentStyle}>{useRoutes(routes)}</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div >
  )
})

export default LayoutWrapper