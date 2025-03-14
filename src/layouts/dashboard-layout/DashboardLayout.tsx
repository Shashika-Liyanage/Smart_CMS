import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';
import { Layout } from 'antd';
import MainBar from '../components/MainBar';

export const DashboardLayout = () => {
  const { Content } = Layout;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
      }}
    >
      <Layout>
        <SideBar />
      </Layout>

      <div style={{ width: '100%' }}>
        <MainBar />
        <Content
          style={{
            margin: '15px 15px',
            padding: 5,
            background: '#fff',
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </div>
    </div>
  );
};
