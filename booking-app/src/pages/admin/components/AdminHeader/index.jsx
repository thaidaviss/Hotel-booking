import { Input } from 'antd';
import React from 'react';
import { MdNotifications, MdSettings } from 'react-icons/md';
import { SearchOutlined } from '@ant-design/icons';
import './AdminHeader.scss';

const { Search } = Input;

const AdminHeader = () => {
  return (
    <div className="admin__header">
      <div className="admin__header--wrapper">
        <div className="admin__header--left">
          <Input 
            placeholder="Search ..."
            prefix={<SearchOutlined />}
          />
        </div>

        <div className="admin__header--right">
          <div className="notification">
            <MdNotifications />
            <p>1</p>
          </div>
          <div className="setting">
            <MdSettings />
          </div>
          <div className="user-avatar">
            <img
              src="https://i.pinimg.com/564x/bb/41/aa/bb41aab18515a84f3456bc074c7c939e.jpg"
              alt="user avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
