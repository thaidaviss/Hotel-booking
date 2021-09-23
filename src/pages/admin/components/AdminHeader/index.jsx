import { Dropdown, Image, Layout, Menu, Row, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAdmin.scss';


const { Header } = Layout;

const HeaderAdmin = () => {
  const accountMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">
          Back to Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin/profiles">
          Edit your Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );
  const userData = JSON.parse(localStorage.getItem("userData"));
  const currentUserId = userData.user.id;


  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ position: "fixed", zIndex: 999, width: "100%" }}
    >
      <Row justify="space-between"
        className="ant-row-header"
      >
        <h2>Royal Luxury Hotel</h2>
        <Space>
          {/* <div className="notification">
            <MdNotifications />
            <p>1</p>
          </div> */}
          <Dropdown
            className="dropdown"
            overlay={accountMenu}
            placement="bottomRight"
            arrow
          >
            <div className="user-avatar">
              <Image
                src="https://live.staticflickr.com/65535/51491000497_fbf6f88611_m.jpg"
                alt="user avatar"
              />
            </div>
          </Dropdown>
        </Space>
      </Row>
    </Header>
  );
}

export default HeaderAdmin;
