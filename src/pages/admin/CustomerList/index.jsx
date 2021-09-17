import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListAction, getFilterUserListAction, getTypeListAction } from 'redux/actions';
import BookingItem from './components/BookingItem';
import CustomerModal from "./components/CustomerModal";
import './CustomerList.scss';


function CustomerListPage() {
  const [isShowCustomerModal, setIsShowCustomerModal] = useState(false);
  const [modifyCustomerData, setModifyCustomerData] = useState({});
  const { userList } = useSelector((state) => state.userReducer);
  const { typeList } = useSelector((state) => state.typeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
    dispatch(getTypeListAction())
    // dispatch(getFilterUserListAction({ params: { _embed: "bookings" } }));
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
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
      key: 'email',
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
    // { 
    //   title: 'Status',
    //   dataIndex: 'bookings',
    //   key: 'bookings',
    //   width: 50,
    //   render: (value) => {
    //     if (value.status === "pending") return <Tag color="processing">Booked</Tag>;
    //     if (value.status === "check-in") return <Tag color="green">Checked-In</Tag>;
    //     if (value.status === "check-out") return <Tag color="yellow">Checked-Out</Tag>;
    //     if (value.status === "canceled") return <Tag color="red">Canceled</Tag>;
    //   }
    // },

    // {
    //   title: 'Action',
    //   dataIndex: 'action',
    //   width: 240,
    //   key: 'action',
    //   render: (_, record) => {
    //     return (
    //       <Space>
    //         <Button
    //           className="user-btn"
    //           style={{ color:"#0275d8", borderColor:"#0275d8" }}
    //           ghost
    //           onClick={() => {
    //             setIsShowCustomerModal(true);
    //             setModifyCustomerData(record);
    //           }}
    //         >
    //           Change Status
    //         </Button>
            
    //       </Space>
    //     )
    //   }
    // },
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
              <BookingItem typeList={typeList} value={value} key={`booking-${record.id}`} />,
            rowExpandable: (record) => record.name !== 'Not Expandable',
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