import React, { useEffect, useState } from "react";
// import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getTypeListAction, createBookingAction, cancelBookingAction, checkInBookingAction, getBookingListAction, getUserListAction, getDiscountListAction, checkOutBookingAction } from "redux/actions";
import BookingModal from "./components/BookingModal";
import './BookingList.scss';


const BookingListPage = (props) => {
  const [isShowBookingModal, setIsShowBookingModal] = useState(false);
  const [modifyBookingData, setModifyBookingData] = useState({});

  const { userList } = useSelector((state) => state.userReducer);
  const { discountList } = useSelector((state) => state.discountReducer);
  const { typeList } = useSelector((state) => state.typeReducer);
  const { bookingList } = useSelector((state) => state.bookingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingListAction());
    dispatch(getTypeListAction());
    dispatch(getUserListAction());
    dispatch(getDiscountListAction());
  }, []);


  const bookingData = bookingList.data.map((bookingItem, bookingIndex) => {
    return {
      key: bookingIndex,
      ...bookingItem,
    };
  });
  const bookingColumns = [
    { 
      title: "No.", 
      dataIndex: "id",
      key: "id",
      width: 80,
      fixed: "left",
      render: (value) => `#${value}` },
    {
      title: "Name",
      dataIndex: "userId",
      width: 200,
      fixed: "left",
      key: "userId",
      render: (id) => {
        const userData = userList.data.find((item) => item.id === id);
        if (userData) return userData.name;
      },
    },
    {
      title: "Phone",
      dataIndex: "userId",
      width: 120,
      key: "userId",
      render: (id) => {
        const userData = userList.data.find((item) => item.id === id);
        if (userData) return userData.phone;
      },
    },
    {
      title: "Email",
      dataIndex: "userId",
      width: 220,
      key: "userId",
      render: (id) => {
        const userData = userList.data.find((item) => item.id === id);
        if (userData) return userData.email;
      },
    },
    {
      title: "Type Room",
      dataIndex: "typeRoomId",
      key: "typeRoomId",
      width: 180,
      render: (id) => {
        const typeData = typeList.data.find((item) => item.id === id);
        if (typeData) return typeData.name;
      },
    },
    {
      title: "Price",
      dataIndex: "typeRoomId",
      key: "typeRoomId",
      render: (id) => {
        const typeData = typeList.data.find((item) => item.id === id);
        if (typeData) return `$ ${typeData.price}`;
      },
    },
    { 
      title: 'Check-In Date',
      dataIndex: 'checkIn',
      key: 'checkIn',
      width: 120,
      render: (value) => value && moment(value).format('DD/MM/YYYY'),
    },
    { 
      title: 'Check-Out Date',
      dataIndex: 'checkOut',
      key: 'checkOut',
      width: 120,
      render: (value) => value && moment(value).format('DD/MM/YYYY'),
    },
    {
      title: "Discount",
      dataIndex: "discountId",
      key: "discountId",
      render: (id) => {
        const discountData = discountList.data.find((item) => item.id === id);
        if (discountData) return discountData.value;
      },
    },
    { 
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => {
        if (value === "pending") return <Tag color="processing">Booked</Tag>;
        if (value === "check-in") return <Tag color="green">Checked-In</Tag>;
        if (value === "check-out") return <Tag color="yellow">Checked-Out</Tag>;
        if (value === "canceled") return <Tag color="red">Canceled</Tag>;
      },
    },
    { 
      title: 'Total price',
      dataIndex: 'total',
      key: 'total',
      width: 80,
      render: (value) => `$ ${value}`,
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 140,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Update At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 140,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Change Booking Status",
      dataIndex: "action",
      width: 490,
      // fixed: "right",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="edit-booking-btn"
              style={{ color:"#0275d8", borderColor:"#0275d8" }}
              ghost
              onClick={() => {
                setIsShowBookingModal(true);
                setModifyBookingData(record);
              }}
            >
              Change Room
            </Button>
            <Popconfirm
              title="Are you sure to confirm status to Booked?"
              onConfirm={() => dispatch(createBookingAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="booking-btn"
                style={{ color:"#5bc0de", borderColor:"#5bc0de" }}
                ghost
              >
                Booked
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure to change status to Check-In?"
              onConfirm={() => dispatch(checkInBookingAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="booking-btn"
                style={{ color:"#4BB543", borderColor:"#4BB543" }}
                ghost
              >
                Check-In
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure to change status to Check-Out?"
              onConfirm={() => dispatch(checkOutBookingAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="booking-btn"
                type="primary"
                ghost
              >
                Check-Out
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure to cancel this booking?"
              onConfirm={() => dispatch(cancelBookingAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button className="booking-btn" danger>
                Cancel
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <div className="booking-title">
        <p className="booking-list-title">BookingList Manager</p>
        {/* <Button
          className="add-booking-btn"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            dispatch(createBookingAction())
          }}
        >
          New Booking
        </Button> */}
      </div>

      <div className="booking-list">
        <Table
          size="small"
          dataSource={bookingData}
          columns={bookingColumns}
          loading={bookingList.load}
          scroll={{ x: 2200 }}
        />
      </div>

      <BookingModal
        isShowBookingModal={isShowBookingModal}
        setIsShowBookingModal={setIsShowBookingModal}
        modifyBookingData={modifyBookingData}
        handleCreateForm={null}
      />
    </div>
  );
};

export default BookingListPage;
