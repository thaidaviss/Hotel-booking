import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { ROUTER_URL } from 'constants/index';
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListAction, editUserAction } from 'redux/actions/index';
import history from 'utils/history';
import AvatarItem from './components/AvatarItem';
import UserModal from "./components/UserModal";
import './UserList.scss';


function UserListPage() {
  const [isShowUserModal, setIsShowUserModal] = useState(false);
  // const [status, setStatus] = useState("active");
  const [modifyUserData, setModifyUserData] = useState({});
  const { userList } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, [dispatch]);


  const userData = userList.data.map((userItem, userIndex) => {
    return {
      key: userIndex,
      ...userItem,
    };
  });
  const userColumns = [
    { title: 'No.', dataIndex: 'id', key: 'id', width: 50, fixed: "left", },
    {
      title: 'Full Name',
      dataIndex: 'name',
      width: 250,
      fixed: "left",
      key: 'name',
      sorter: true,
      render: (value, record) => {
        return <AvatarItem avatar={record.avatar} value={value} key={`avatar-${record.id}`} />;
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 220,
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      width: 120,
      key: 'phone',
    },
    { 
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 80,
      render: (value) => {
        if (value === "user") return <Tag color="green">{value}</Tag>;
        return <Tag color="gold">{value}</Tag>
      },
      filters: [
        {
          text: 'Admin',
          value: 'admin',
        },
        {
          text: 'User',
          value: 'user',
        },
      ],
    },
    { 
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (value) => {
        if (value === "active") return <Tag color="green">{value}</Tag>;
        return <Tag color="red">{value}</Tag>
      }
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 120,
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 120,
      render: (value) => value && moment(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 240,
      fixed: "right",
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="user-btn"
              style={{ color:"#4BB543", borderColor:"#4BB543" }}
              ghost
              onClick={() => {
                setIsShowUserModal(true);
                setModifyUserData(record);
              }}
            >
              View
            </Button>
            <Button
              className="user-btn"
              type="primary"
              ghost
              onClick={() => {
                history.push(
                  `${ROUTER_URL.ADMIN}${ROUTER_URL.USERS}/${record.id}${ROUTER_URL.EDIT}`
                );
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title={
                record.status === "active" 
                ? "Are you sure to inactive user?"
                : "Are you sure to active user?"
              }
              onConfirm={() => {
                if (record.status === "active") {
                  record.status = "inactive";
                } else {
                  record.status = "active";
                }
                dispatch(editUserAction({ id: record.id, data: record }));
                // setStatus(record.status);
              }}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              {record.status === "active" 
              ? (
                <Button className="user-btn" danger>
                  Inactive
                </Button>
              )
              : (
                <Button className="user-btn"
                  style={{ color:"#4BB543", borderColor:"#4BB543" }}
                  ghost
                >
                  Active
                </Button>
              )
              }
            </Popconfirm>
          </Space>
        )
      }
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="user-title">
        <Button 
          className="add-user-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            history.push(
              `${ROUTER_URL.ADMIN}${ROUTER_URL.CREATE_USER}`
            );
          }}
        >
          Add User
        </Button>
      </div>
      <div className="user-list">
        <Table
          size="small"
          dataSource={userData}
          columns={userColumns}
          loading={userList.load}
          scroll={{x: 1300}}
        />
      </div>

      <UserModal
        isShowUserModal={isShowUserModal}
        setIsShowUserModal={setIsShowUserModal}
        modifyUserData={modifyUserData}
        userList={userList}
        handleSubmitForm={null}
      />
    </div>
  );
};

export default UserListPage;