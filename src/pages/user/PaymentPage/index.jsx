import { IMAGES } from "constants/images.constants";
import { PAYMENT } from "constants/index";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./BookingPage.scss";

function PaymentPage(props) {
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
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header />
      <div className="payment">
        <div className="booking ">
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
            <Link>Home </Link>
            {">"}
            <Link>1. Booking information </Link>
            {">"}
            <Link className="booking__link-active">2. Confirm and complete your payment</Link>
          </div> */}
          </div>
          <div className="booking__body">
            <div className="container">
              <div className="booking__left">
                <div className="booking__title">{t("Payments")}</div>
                <p className="booking__description">Please choose your payment method</p>
                <div className="payment__list">
                  {PAYMENT.map((paymentItem, index) => (
                    <div className="payment__item" key={`payment__item-${index}`}>
                      <div className="payment__item-left">
                        <input type="radio" name="payment" id={`payment-${index}`} value={paymentItem.title} />
                        <label for={`payment-${index}`}  className="payment__item-content">
                        <h1>{paymentItem.title}</h1>
                          <p>{paymentItem.content}</p>
                        </label>
                      </div>
                      <div className="payment__item-right">
                        <div className="payment__item-img">
                          <img
                            src={paymentItem.image}
                            alt=""
                            style={
                              paymentItem.title === "MoMo"
                                ? { width: "3rem", marginLeft: "3rem" }
                                : {}
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn-payments">
                  Payments
                  <span>
                    <i className=" fa fa-angle-double-right"></i>
                  </span>
                </button>
              </div>
              <div className="booking__right">
                <div className="booking__title booking__bill-title ">
                  {t("Your booking details")}
                </div>
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
                        {`${
                          bookingInfo.price * 0.1 + bookingInfo.price * bookingInfo.numberNight
                        }$`}
                      </div>
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

export default PaymentPage;
