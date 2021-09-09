import { Button, Popconfirm, Space, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import UserModal from "./components/UserModal";
import './UserList.scss';


function UserListPage() {
  const [isShowUserModal, setIsShowUserModal] = useState("");
  const [modifyUserData, setModifyUserData] = useState({});

  useEffect(() => {

  }, []);

  const userData = [
    {
      key: '1',
      name: 'Tran Nguyen Cong Phuong',
      age: 29,
      gender: "male",
      address: "Tam Dan - Phu Ninh - Quang Nam",
      birthday: "19/01/1993",
      role: "admin",
    },
    {
      key: '2',
      name: 'Pham Hong Nam',
      age: 30,
      gender: "male",
      address: "Ba Dong - Ba To - Quang Ngai",
      birthday: "02/11/1992",
      role: "user",
    },
    {
      key: '3',
      name: 'Elizabeth Tran',
      age: 30,
      gender: "female",
      address: "Tam Dan - Phu Ninh - Quang Nam",
      birthday: "19/01/1992",
      role: "staff",
    },
  ];
  const userColumns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      width: 250,
      fixed: "left",
      key: 'name',
    },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Address', dataIndex: 'address', width: 250, key: 'address' },
    { title: 'Day of birth', dataIndex: 'birthday', key: 'birthday' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 200,
      fixed: "right",
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="user-btn"
              type="primary"
              ghost
              onClick={() => {
                setIsShowUserModal("edit");
                setModifyUserData(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => null}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="user-btn" danger>Delete</Button>
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  return (
    <div>
      <div className="user-title">
        <Button 
          className="add-user-btn"
          type="primary"
          onClick={() => {
            setIsShowUserModal("create");
            setModifyUserData({
              name: "",
              age: 0,
              gender: "",
              address: "",
              birthday: "01/01/2015",
              role: "",
            });
          }}
        >
          Add User
        </Button>
      </div>
      <div className="user-list">
        <Table dataSource={userData} columns={userColumns} scroll={{x: 1500}} />
      </div>

      <UserModal
        isShowUserModal={isShowUserModal}
        setIsShowUserModal={setIsShowUserModal}
        modifyUserData={modifyUserData}
        locationList={null}
        handleSubmitForm={null}
      />
    </div>
  );
};

export default UserListPage;