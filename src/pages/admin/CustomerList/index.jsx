import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterUserListAction, getTypeListAction } from 'redux/actions';
import BookingItem from './components/BookingItem';
import CustomerModal from "./components/CustomerModal";
import './CustomerList.scss';


function CustomerListPage() {
  const [isShowCustomerModal, setIsShowCustomerModal] = useState(false);
  const [modifyCustomerData, setModifyCustomerData] = useState({});
  const { userList } = useSelector((state) => state.userReducer);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypeListAction())
    dispatch(getFilterUserListAction({ params: { _embed: "bookings" } }));
  }, []);


  const userData = userList.data.map((userItem, userIndex) => {
    return {
      key: userIndex,
      ...userItem,
    };
  });
  const userColumns = [
    { title: 'No.', dataIndex: 'id', key: 'id', width: 30, fixed: "left", },
    {
      title: 'Full Name',
      dataIndex: 'name',
      width: 120,
      fixed: "left",
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: 80,
      key: 'gender',
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      onFilter: (value, record) => {
        return record.gender == value;
      },
      render: (value, record) => {
        if (record.gender === "male") return "Male";
        return "Female";
      }
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      width: 80,
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: 150,
      key: 'address',
    },
  ];

  return (
    <div>
      <div className="user-title">
        <p className="user-list-title">Customer Manager</p>
        <Space>
          <Input
            className="user-search"
            prefix={<SearchOutlined />}
            placeholder="Search ..."
          />
        </Space>
      </div>

      <div className="user-list">
        <Table
          size="small"
          dataSource={userData}
          columns={userColumns}
          loading={userList.load}
          expandable={{
            expandedRowRender: (value, record) =>
              <BookingItem
                key={`booking-${record.id}`}
                id={record.id}
                value={value}
              />,
            rowExpandable: (record) => record !== 'bookings',
          }}
          scroll={{ x: 900 }}
        />
      </div>

      <CustomerModal
        isShowCustomerModal={isShowCustomerModal}
        setIsShowCustomerModal={setIsShowCustomerModal}
        modifyCustomerData={modifyCustomerData}
      />
    </div>
  );
};

export default CustomerListPage;