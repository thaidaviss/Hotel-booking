import { ROUTER_URL } from "constants/index";
import { IMAGES } from "constants/images.constants";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { useTranslation } from "react-i18next";
import "./BookingPage.scss";
import { Link } from "react-router-dom";
import { Form, Input} from "antd";
import history from "utils/history";
function BookingPage(props) {
  const { t } = useTranslation();
  const bookingInfo = {
    guests: 4,
    room: "Superior Room Single",
    checkIn: "12/09/2021",
    dateIn: "Sunday",
    checkOut: "13/09/2021",
    dateOut: "Monday",
    numberNight: 1,
    price: 200,
    images: ["https://danangpetrohotel.com.vn/dataUpload/Room/room/1.jpg"],
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    history.push(ROUTER_URL.PAYMENT);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header />
      <div className="booking">
        <div className="booking__banner">
          <div className="booking__banner-content">
            <div className="line-1">
              <img src={IMAGES.LINE1} alt="" />
            </div>
            <div className="heading">Royal Luxury Hotel</div>
            <div className="title">{t(" Booking")}</div>
            <div className="line-2">
              <img src={IMAGES.LINE2} alt="" />
            </div>
          </div>
          {/* <div className="booking__link">
            <Link >Home </Link>
            {">"}
            <Link className="booking__link-active">1. Booking information </Link>
            {">"}
            <Link>2. Confirm and complete your payment</Link>
          </div> */}
        </div>
        <div className="booking__body">
          <div className="container">
            <div className="booking__left">
              <div className="booking__booking-info">
                <div className="booking__title">{t("Booking information")}</div>
                <div className="booking__group">
                  <label>{"Guests"}</label>
                  <Input disabled value={`${bookingInfo.guests} guest`} />
                </div>
                <div className="booking__group">
                  <label>{`${bookingInfo.numberNight}nights for ${bookingInfo.room} at the royal hotel `}</label>
                  <div className="booking__date">
                    <div className="booking__date-item">
                      <div className="line"></div>
                      <div className="booking__date-title">{t("Check-in")}</div>
                      <h3>{bookingInfo.checkIn}</h3>
                      <small>{t(bookingInfo.dateIn)}</small>
                    </div>
                    <div className="booking__date-item">
                      <div className="line red"></div>
                      <div className="booking__date-title">{t("Check-out")}</div>
                      <h3>{bookingInfo.checkOut}</h3>
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
                  name="your information"
                  layout={"vertical"}
                  initialValues={{ remember: true }}
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
                    name="country"
                    rules={[{ required: true, message: "Please select your country!" }]}
                  >
                    <Input placeholder="e.g: Viet Nam" />
                  </Form.Item>
                  <Form.Item label="Promotion" name="discount">
                    <Input placeholder="e.g: SUMMER21X" />
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
                    <div className="name">{t(bookingInfo.room)}</div>
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
                        <p>{`${bookingInfo.checkIn} - ${bookingInfo.checkOut}`}</p>
                      </h4>
                    </div>
                    <div className="booking__info-item">
                      <span>
                        <i className="fa fa-user-circle"></i>
                      </span>
                      <h4>{`${bookingInfo.guests} adult`}</h4>
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
                    <div className="booking__total-number">{`${bookingInfo.price * 0.1}$`}</div>
                  </div>
                </div>
                <div className="booking__bill-item">
                  <div className="booking__total-item total">
                    <div className="booking__total-title ">{t("Total")}</div>
                    <div className="booking__total-number">
                      {`${bookingInfo.price * 0.1 + bookingInfo.price * bookingInfo.numberNight}$`}
                    </div>
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
