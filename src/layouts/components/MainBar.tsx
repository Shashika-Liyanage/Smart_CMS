import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Layout, Space } from 'antd';
import React from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';

type Props = {};

function MainBar({}: Props) {
  const { Header} = Layout;
  const {logout} =  useApplicationContext();

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      logout()
    } else if (key === 'profile') {
      
    } else if (key === 'settings') {
     
    }
  };


  const userMenu = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ];

  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
        height: '55px',
      }}
    >
      <Space size={16}>
        <Badge count={5} dot>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>

        <Dropdown
          
          menu={{
            items: userMenu.map((item) => ({
              ...item,
              icon: React.cloneElement(item.icon, {
                style: { fontSize: '14px' },
              }),
              style: { padding: '8px 16px', fontSize: '14px' },
              onClick: handleMenuClick, 
            })),
          }}
          placement="bottomRight"
          dropdownRender={(menu) => (
            <div style={{ minWidth: '180px' }}>
              {React.cloneElement(menu, {
                style: { padding: '10px 0' },
              })}
            </div>
          )}
        >
          <Avatar
            style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </Space>
    </Header>
  );
}

export default MainBar;
