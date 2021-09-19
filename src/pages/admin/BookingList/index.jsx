import { Table, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingListAction, getDiscountListAction, getTypeListAction, getUserListAction } from "redux/actions";
import './BookingList.scss';
import BookingModal from "./components/BookingModal";
import ChangeStatus from "./components/ChangeStatus";


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
      filters: [
        { text: 'Admin', value: 'admin', },
        { text: 'Admin', value: 'admin', },
        { text: 'Admin', value: 'admin', },
        { text: 'Admin', value: 'admin', },
        { text: 'Admin', value: 'admin', },
      ],
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
      width: 370,
      key: "action",
      render: (_, record) => {
        return (
          <ChangeStatus
            key={`status-${record.id}`}
            record={record}
            setIsShowBookingModal={setIsShowBookingModal}
            setModifyBookingData={setModifyBookingData}
          />
        )
      },
    },
  ];

  return (
    <div>
      <div className="booking-title">
        <p className="booking-list-title">Booking Manager</p>
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
