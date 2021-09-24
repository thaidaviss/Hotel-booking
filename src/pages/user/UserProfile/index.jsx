import { DatePicker, Form, Image, Input, Popconfirm, Space, Table, Tag } from "antd";
import { IMAGES } from "constants/images.constants";
import Banner from "layouts/Banner";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelBookingAction,
  editUserAction,
  getFilterBookingListAction,
  getUserDetailAction,
  userEditInfoAction,
} from "redux/actions";
import SliderRooms from "../HomePage/components/SliderRooms";
import "./UserProfile.scss";
const dateFormat = "DD/MM/YYYY";

function UserProfile(props) {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const [modifyRoomForm] = Form.useForm();
  const CancelBooking = (id) => {
    dispatch(cancelBookingAction({ id: id }));
  };
  const columns = [
    {
      title: "Name",

      key: "name",
      render: (_, record) => <div>{record?.typeRoom?.name}</div>,
    },
    {
      title: "Check in",
      dataIndex: "checkIn",
      key: "checkIn",
      render: (value) => value && moment(value).format("DD/MM/YYYY"),
    },
    {
      title: "Check out",
      dataIndex: "checkOut",
      key: "checkOut",
      render: (value) => value && moment(value).format("DD/MM/YYYY"),
    },
    {
      title: "Price/1 Night",
      dataIndex: "price",
      key: "price",
      render: (value) => `$ ${value}`,
    },
    {
      title: "Discount",
      dataIndex: "discountCode",
      key: "discountCode",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (value) => `$ ${value}`,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (value) => {
        let color = "blue";
        if (value === "cancel") {
          color = "red";
        }
        if (value === "check-in") {
          color = "green";
        }
        if (value === "check-out") {
          color = "orange";
        }
        return (
          <Tag color={color} key={value}>
            {value.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to cancel this booking?"
            onConfirm={() => CancelBooking(record.id)}
            onCancel={() => null}
            okText="Yes"
            cancelText="No"
            disabled={
              record.status === "canceled" ||
              record.status === "check-in" ||
              record.status === "check-out"
            }
          >
            <a
              className={
                record.status === "canceled" ||
                record.status === "check-in" ||
                record.status === "check-out"
                  ? "cancel cancel-disable"
                  : "cancel"
              }
            >
              Cancel
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [isEdit, setIsEdit] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userData")).user.id;

  const userInfo = useSelector((state) => state.userReducer.userDetail);
  const listBookingUser = useSelector((state) => state.bookingReducer.bookingList);

  useEffect(() => {
    modifyRoomForm.setFieldsValue({ ...userInfo.data, birthday: moment(userInfo.data.birthday) });
  }, [userInfo.data, modifyRoomForm]);

  useEffect(() => {
    dispatch(getUserDetailAction({ id: userId }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilterBookingListAction({ params: { userId: userId, _expand: "typeRoom" } }));
  }, [dispatch]);

  const UpdateInfo = (values) => {
    dispatch(
      userEditInfoAction({
        id: userId,
        data: { ...values, birthday: new Date(values.birthday).getTime() },
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      <Header />
      <Banner heading={"Your information"} />
      <section className="profile-page">
        <div className="container">
          <div className="profile__title">
            <h1>Your Profile</h1>
            <div className="profile__btn">
              <button className="btn-edit" onClick={() => setIsEdit(true)}>
                <FaPencilAlt />
                Edit
              </button>
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__info">
              <Form
                name="your information"
                form={modifyRoomForm}
                layout={"vertical"}
                initialValues={{ ...userInfo.data, birthday: moment(userInfo.data.birthday) }}
                onFinish={UpdateInfo}
                onFinishFailed={() => console.log()}
                autoComplete="off"
              >
                <Form.Item
                  label="Customer name"
                  name="name"
                  rules={[{ required: true, message: "Please input your username!" }]}
                >
                  <Input
                    placeholder="Full name as written on your national ID card"
                    disabled={!isEdit}
                  />
                </Form.Item>
                <div className="form__inline">
                  <div className="form__inline-item">
                    <Form.Item
                      label="Mobile number"
                      name="phone"
                      rules={[{ required: true, message: "Please input your phone number!" }]}
                    >
                      <Input placeholder="e.g:095343532" disabled={!isEdit} />
                    </Form.Item>
                  </div>
                  <div className="form__inline-item">
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, message: "Please input your email!" }]}
                    >
                      <Input placeholder="e.g: email@example.com" disabled={true} />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item
                  label="Country of residence"
                  name="address"
                  rules={[{ required: true, message: "Please select your country!" }]}
                >
                  <Input placeholder="e.g: VietNam" disabled={!isEdit} />
                </Form.Item>
                <Form.Item
                  label="Birthday"
                  name="birthday"
                  rules={[{ required: true, message: "Please enter your birthday" }]}
                >
                  <DatePicker
                    format={dateFormat}
                    size="large"
                    style={{ width: "100%", fontSize: "16px" }}
                    disabled={!isEdit}
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  {isEdit && <button className="btn-update">Update information</button>}
                </Form.Item>
              </Form>
            </div>
            <div className="profile__avatar">
              <label htmlFor="update-image"></label>
              <Image src={IMAGES.USER1} />
              <input type="file" className="update-image" name="update-image" />
            </div>
          </div>
          <div className="profile__history">
            <div className="profile__title">
              <h1>History Booking</h1>
            </div>
            <Table
              columns={columns}
              dataSource={listBookingUser.data}
              loading={listBookingUser.load}
            />
          </div>
          <div className="profile__history-room">
            <div className="profile__title">
              <h1>History room</h1>
            </div>
            <SliderRooms />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UserProfile;
