import { DatePicker, Select, notification } from "antd";
import { ROUTER_URL } from "constants/index";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getRoomListAction, getRoomVariable } from "redux/actions";
import { getBookingListAction } from "redux/actions/booking.action";
import { checkVariable } from "redux/constants";
import history from "utils/history";
import "./MakeReservation.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;
const formatDate = "YYYY/MM/DD";

function MakeReservation({ isFocus = false }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const listRoom = useSelector((state) => state.roomReducer.roomList.data);
  const listBooking = useSelector(
    (state) => state.bookingReducer.bookingList.data
  );

  const [infoCheck, setInfoCheck] = useState({
    date: [undefined, undefined],
    guest: undefined,
  });
  console.log(
    "🚀 ~ file: index.jsx ~ line 25 ~ MakeReservation ~ infoCheck",
    infoCheck
  );

  useEffect(() => {
    dispatch(getBookingListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRoomListAction());
  }, [dispatch]);

  useEffect(() => {
    setInfoCheck(
      JSON.parse(sessionStorage.getItem("checkVariable")) || {
        date: [null, null],
        guest: undefined,
      }
    );
  }, []);

  const handleCheckVariable = () => {
    if (!infoCheck.date[0] || !infoCheck.date[1]) {
      return notification.error({
        message: "You have not selected the date of checkin and checkout.",
      });
    }
    if (!infoCheck.guest) {
      return notification.error({
        message: "You have not selected the number of guests.",
      });
    }
    const checkIn = new Date(infoCheck.date[0]).getTime();
    const checkOut = new Date(infoCheck.date[1]).getTime();
    const listVariable = checkVariable(
      checkIn,
      checkOut,
      listBooking,
      listRoom
    );
    dispatch(
      getRoomVariable({
        data: listVariable,
        checkIn: infoCheck.date[0],
        checkOut: infoCheck.date[1],
        guest: infoCheck.guest,
      })
    );
    sessionStorage.setItem("checkVariable", JSON.stringify(infoCheck));
    history.push(ROUTER_URL.ROOMS);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };
  return (
    <div className="reservation">
      <div className="container">
        <div className="reservation__item range-picker-wrapper">
          <RangePicker
            className="range-picker"
            size="large"
            value={
              infoCheck.date[0] && [
                moment(infoCheck.date[0], formatDate),
                moment(infoCheck.date[1], formatDate),
              ]
            }
            disabledDate={disabledDate}
            onChange={(date, dateString) =>
              setInfoCheck({
                ...infoCheck,
                date: dateString,
              })
            }
            format={formatDate}
            autoFocus={isFocus}
            placeholder={[t("CHECK-IN"), t("CHECK-OUT")]}
          />
        </div>
        <div className="reservation__item">
          <Select
            value={infoCheck.guest}
            className="reservation__select"
            placeholder={t("GUESTS")}
            size="large"
            onChange={(values) => setInfoCheck({ ...infoCheck, guest: values })}
            // filterOption={(input, option) =>
            //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            // filterSort={(optionA, optionB) =>
            //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            // }
          >
            {[...Array(10)].map((optionItem, optionIndex) => (
              <Option value={optionIndex + 1}>{optionIndex + 1} PEOPLE</Option>
            ))}
          </Select>
        </div>
        <div className="reservation__item">
          <button className="btn-check" onClick={() => handleCheckVariable()}>
            {t("CHECK AVAILABILITY")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeReservation;
