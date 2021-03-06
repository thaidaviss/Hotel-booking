import { Form, Input, notification } from "antd";
import { ROUTER_URL, Tax } from "constants/index";
import Banner from "layouts/Banner";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import {
  clearDiscountDetailAction,
  clearRoomVariableAction,
  getDiscountDetailAction,
  getUserDetailAction,
} from "redux/actions";
import { createBookingAction } from "redux/actions/booking.action";
import history from "utils/history";
import "./BookingPage.scss";
import PaymentPage from "./components/PaymentPage";
const totalPrice = (bookingInfo) => {
  let total = bookingInfo.price * Tax + bookingInfo.price * bookingInfo.numberNight;
  total = total - (total / 100) * bookingInfo.discountPrice;

  return total;
};
function BookingPage(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const pathName = useLocation();
  const discount = useRef("");
  const [modifyRoomForm] = Form.useForm();

  const bookingInfoLocal = JSON.parse(sessionStorage.getItem("bookingInfo"));
  const userId = JSON.parse(localStorage.getItem("userData")).user.id;
  const userLogin = useSelector((state) => state.userReducer.userDetail).data;
  const Discount = useSelector((state) => state.discountReducer.discountDetail);

  const [bookingInfo, setBookingInfo] = useState(bookingInfoLocal);
  console.log("🚀 ~ file: index.jsx ~ line 41 ~ BookingPage ~ bookingInfo", bookingInfo);

  useEffect(() => {
    modifyRoomForm.setFieldsValue(bookingInfo);
  }, [bookingInfo, modifyRoomForm]);

  useEffect(() => {
    setBookingInfo({
      ...bookingInfo,
      name: userLogin.name,
      phone: userLogin.phone,
      email: userLogin.email,
      address: userLogin.address,
      discountCode: Discount.data[0]?.name || null,
      discountPrice: Discount.data[0]?.value || 0,
      total: totalPrice(bookingInfo),
    });
  }, [userLogin, Discount.data]);

  useEffect(() => {
    if (bookingInfo.discountCode) {
      setBookingInfo({ ...bookingInfo, total: totalPrice(bookingInfo) });
    }
  }, [bookingInfo.discountCode]);

  useEffect(() => {
    dispatch(clearDiscountDetailAction());
    return () => {
      dispatch(clearDiscountDetailAction());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserDetailAction({ id: userId }));
  }, [dispatch, userId]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("bookingInfo");
      sessionStorage.removeItem("checkVariable");
    };
  }, []);

  const onFinish = (values) => {
    setBookingInfo({ ...bookingInfo, ...values });
    history.push(ROUTER_URL.PAYMENT);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleApplyDiscount = (values) => {
    dispatch(getDiscountDetailAction({ name: discount.current.state.value }));
  };

  const BookingRoom = () => {
    if (bookingInfo) {
      const DataPayment = {
        typeRoomId: bookingInfo.typeRoomId,
        userId: userId,
        discountCode: bookingInfo.discountCode,
        discountPrice: bookingInfo.discountPrice,
        roomId: bookingInfo.roomId,
        checkOut: new Date(bookingInfo.date[1]).getTime(),
        checkIn: new Date(bookingInfo.date[0]).getTime(),
        numberNight: bookingInfo.numberNight,
        price: bookingInfo.price,
        total: bookingInfo.total,
        status: "pending",
      };
      dispatch(createBookingAction({ data: DataPayment }));
      dispatch(clearRoomVariableAction());
    } else {
      notification.info({ description: "you have not booking!" });
      return <Redirect to={ROUTER_URL.ROOMS} />;
    }
  };

  if (!bookingInfoLocal) {
    notification.info({ description: "you have not booking!" });
    return <Redirect to={ROUTER_URL.ROOMS} />;
  }
  return (
    <>
      <Header />
      <div className="booking">
        <Banner heading={"Booking Room"} />
        <div className="booking__body">
          <div className="container">
            {pathName.pathname === ROUTER_URL.BOOKING ? (
              <div className="booking__left">
                <div className="booking__booking-info">
                  <div className="booking__title">{t("Booking information")}</div>
                  <div className="booking__group">
                    <label>{"Guests"}</label>
                    <Input disabled value={`${bookingInfo.guest} guest`} />
                  </div>
                  <div className="booking__group">
                    <label>{`${bookingInfo?.numberNight}nights for ${bookingInfo.typeRoom} at the royal hotel `}</label>
                    <div className="booking__date">
                      <div className="booking__date-item">
                        <div className="line"></div>
                        <div className="booking__date-title">{t("Check-in")}</div>
                        <h3>{bookingInfo.date[0]}</h3>
                        <small>{t(bookingInfo.dateIn)}</small>
                      </div>
                      <div className="booking__date-item">
                        <div className="line red"></div>
                        <div className="booking__date-title">{t("Check-out")}</div>
                        <h3>{bookingInfo.date[1]}</h3>
                        <small>{t(bookingInfo.dateOut)}</small>
                      </div>
                    </div>
                  </div>
                  <div className="booking__group">
                    <label>{"Damage Policy"}</label>
                    <p>
                      You will be responsible for any damage to the rental property caused by you or
                      your party during your stay.
                    </p>
                  </div>
                </div>
                <div className="booking__your-info">
                  <div className="booking__title">{t("Your information")}</div>
                  <Form
                    form={modifyRoomForm}
                    name="your information"
                    layout={"vertical"}
                    initialValues={bookingInfo}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Customer name"
                      name="name"
                      rules={[{ required: true, message: "Please input your username!" }]}
                    >
                      <Input placeholder="Full name as written on your national ID card" />
                    </Form.Item>
                    <div className="form__inline">
                      <div className="form__inline-item">
                        <Form.Item
                          label="Mobile number"
                          name="phone"
                          rules={[{ required: true, message: "Please input your phone number!" }]}
                        >
                          <Input placeholder="e.g:095343532" />
                        </Form.Item>
                      </div>
                      <div className="form__inline-item">
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[{ required: true, message: "Please input your email!" }]}
                        >
                          <Input placeholder="e.g: email@example.com" />
                        </Form.Item>
                      </div>
                    </div>
                    <Form.Item
                      label="Country of residence"
                      name="address"
                      rules={[{ required: true, message: "Please select your country!" }]}
                    >
                      <Input placeholder="e.g: VietNam" />
                    </Form.Item>

                    <Form.Item label="Promotion" name="discount">
                      <div className="form__inline">
                        <div className="form__inline-item">
                          <Input
                            placeholder="e.g: SUMMER21X"
                            ref={discount}
                            disabled={
                              (discount.current !== "") & (Object.keys(Discount.data).length !== 0)
                            }
                          />
                        </div>
                        <div className="form__inline-item">
                          <button
                            disabled={
                              (discount.current !== "") & (Object.keys(Discount.data).length !== 0)
                            }
                            className={
                              (discount.current !== "") & (Object.keys(Discount.data).length !== 0)
                                ? " btn-discount btn-discount__disable"
                                : "btn-discount"
                            }
                            type="button"
                            onClick={(values) => handleApplyDiscount(values)}
                          >
                            Apply Discount
                          </button>
                        </div>
                      </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                      <button className="btn-payments">
                        Payments
                        <span>
                          <i className=" fa fa-angle-double-right"></i>
                        </span>
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            ) : (
              <PaymentPage handleBooking={BookingRoom} />
            )}

            <div className="booking__right">
              <div className="booking__title booking__bill-title ">{t("Your booking details")}</div>
              <div className="booking__bill">
                <div className="booking__bill-item">
                  <div className="booking__room">
                    <div className="image">
                      <Link>
                        <img src={bookingInfo.images[0]} alt="" />
                      </Link>
                    </div>
                    <div className="name">{t(bookingInfo.typeRoom)}</div>
                  </div>
                </div>
                <div className="booking__bill-item">
                  <div className="booking__info">
                    <div className="booking__info-item">
                      <span>
                        <i className="fa fa-calendar"></i>
                      </span>
                      <h4>
                        {`${bookingInfo.numberNight} night`}{" "}
                        <p>{`${bookingInfo.date[0]} - ${bookingInfo.date[1]}`}</p>
                      </h4>
                    </div>
                    <div className="booking__info-item">
                      <span>
                        <i className="fa fa-user-circle"></i>
                      </span>
                      <h4>{`${bookingInfo.guest} adult`}</h4>
                    </div>
                  </div>
                </div>
                <div className="booking__bill-item">
                  <div className="booking__total-item">
                    <div className="booking__total-title">{t("Rental fee 1 night")}</div>
                    <div className="booking__total-number">{`${bookingInfo.price}$`}</div>
                  </div>
                  <div className="booking__total-item">
                    <div className="booking__total-title">{t("Other service fee")}</div>
                    <div className="booking__total-number">{`${(
                      bookingInfo.price * Tax
                    ).toLocaleString()}$`}</div>
                  </div>
                  <div className="booking__total-item">
                    <div className="booking__total-title">{t("Discount")}</div>
                    <div className="booking__total-number">{`${
                      (discount !== "") & (Object.keys(Discount.data).length !== 0)
                        ? Discount.data[0].value
                        : 0
                    }%`}</div>
                  </div>
                </div>
                <div className="booking__bill-item">
                  <div className="booking__total-item total">
                    <div className="booking__total-title ">{t("Total")}</div>
                    <div className="booking__total-number">{`${bookingInfo.total}$`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
