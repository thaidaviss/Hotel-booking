import React from 'react';
import { Input, Menu, Dropdown } from 'antd';
import { MdNotifications, MdSettings } from 'react-icons/md';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './AdminHeader.scss';
import { useSelector } from 'react-redux';

// const settingMenu = (
//   <Menu>
//     <Menu.Item>
//       <Link to="/">
//         1st menu item
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link to="/">
//         2nd menu item
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link to="/">
//         3rd menu item
//       </Link>
//     </Menu.Item>
//   </Menu>
// );

const AdminHeader = (props) => {
  const { isMiniMenu, setIsMiniMenu } = props;
  const { userList } = useSelector((state) => state.userReducer);
  // const currentUser = localStorage.getItem("userData");
  // const userId = currentUser.user.id;
  const accountMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">
          Back to Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">
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
  
  return (
    <div className={isMiniMenu ? "admin__header--show" : "admin__header"}>
      <div className="admin__header--wrapper">
        <div className="admin__header--left">
          <Input 
            className="admin__header__search"
            placeholder="Search ..."
            prefix={<SearchOutlined />}
          />
        </div>

        <div className="admin__header--right">
          <div className="notification">
            <MdNotifications />
            <p>1</p>
          </div>

          {/* <Dropdown className="dropdown" overlay={settingMenu} placement="bottomCenter" arrow>
            <div className="setting">
              <MdSettings />
            </div>
          </Dropdown> */}

          <Dropdown className="dropdown" overlay={accountMenu} placement="bottomCenter" arrow>
            <div className="user-avatar">
              <img
                src="https://i.pinimg.com/564x/bb/41/aa/bb41aab18515a84f3456bc074c7c939e.jpg"
                alt="user avatar"
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
