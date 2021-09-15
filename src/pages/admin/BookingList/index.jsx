import React, { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getTypeListAction, createBookingAction, cancelBookingAction, checkInBookingAction, getBookingListAction, getUserListAction, getDiscountListAction } from "redux/actions";
// import BookingModal from "./components/BookingModal";


const BookingListPage = (props) => {
  const [isShowBookingModal, setIsShowBookingModal] = useState("");
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

  // function handleCreateForm(values) {
  //   dispatch(
  //     createBookingAction({
  //       data: values,
  //     })
  //   );
  //   setIsShowBookingModal("");
  // }
  // function handleCheckInForm(values) {
  //   dispatch(
  //     checkInBookingAction({
  //       data: values,
  //     })
  //   );
  //   setIsShowBookingModal("");
  // }

  const bookingData = bookingList.data.map((bookingItem, bookingIndex) => {
    return {
      key: bookingIndex,
      ...bookingItem,
    };
  });
  const bookingColumns = [
    { title: "No.", dataIndex: "id", key: "id", width: 80, render: (value) => `#${value}` },
    {
      title: "Name",
      dataIndex: "userId",
      width: 150,
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
      width: 150,
      key: "userId",
      render: (id) => {
        const userData = userList.data.find((item) => item.id === id);
        if (userData) return userData.phone;
      },
    },
    {
      title: "Email",
      dataIndex: "userId",
      width: 150,
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
      render: (id) => {
        const typeData = typeList.data.find((item) => item.id === id);
        if (typeData) return typeData.name;
      },
    },
    { 
      title: 'Check-In Date',
      dataIndex: 'checkIn',
      key: 'checkIn',
      render: (value) => value && moment(value).format('DD/MM/YYYY'),
    },
    { 
      title: 'Check-Out Date',
      dataIndex: 'checkOut',
      key: 'checkOut',
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
        if (value === "pending") return <Tag color="green">Booked</Tag>;
        if (value === "pending") return <Tag color="green">Booked</Tag>;
        if (value === "pending") return <Tag color="green">Booked</Tag>;
        if (value === "pending") return <Tag color="green">Booked</Tag>;
      },
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Update At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 200,
      render: (value) => value && moment(value).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Change Booking Status",
      dataIndex: "action",
      width: 200,
      fixed: "right",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button
              className="edit-booking-btn"
              type="primary"
              ghost
              onClick={() => {
                setIsShowBookingModal("edit");
                setModifyBookingData(record);
              }}
            >
              Edit
            </Button>
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
        <Button
          className="add-booking-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            dispatch(createBookingAction())
            // setIsShowBookingModal("create");
            // setModifyBookingData({ name: "", rating: 0 });
          }}
        >
          New Booking
        </Button>
      </div>
      <div className="booking-list">
        {/* <Table
          size="small"
          dataSource={bookingData}
          columns={bookingColumns}
          loading={bookingList.load}
          scroll={{ x: 1200 }}
        /> */}
      </div>

      {/* <BookingModal
        isShowBookingModal={isShowBookingModal}
        setIsShowBookingModal={setIsShowBookingModal}
        modifyBookingData={modifyBookingData}
        handleCreateForm={handleCreateForm}
      /> */}
    </div>
  );
};

export default BookingListPage;
