import React from 'react';
import { Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
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
    <Header style={{ position: 'fixed', zIndex: 999, width: '100%' }}>
      <Space justify="space-between">
        <h2>Royal Luxury Hotel</h2>
        <Row>
          {/* <Col className="notification">
            <MdNotifications />
            <p>1</p>
          </Col> */}
          <Col>
            <Dropdown
              className="dropdown"
              overlay={accountMenu}
              placement="bottomCenter"
              arrow
            >
              <div className="user-avatar">
                <img
                  src="https://i.pinimg.com/564x/bb/41/aa/bb41aab18515a84f3456bc074c7c939e.jpg"
                  alt="user avatar"
                />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </Space>
    </Header>
  );
}

export default HeaderAdmin;
