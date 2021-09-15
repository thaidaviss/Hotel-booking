import { DatePicker, Select } from "antd";
import { ROUTER_URL } from "constants/index";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getRoomListAction, getRoomVariable } from "redux/actions";
import { getListBookingAction } from "redux/actions/booking.action";
import { checkVariable } from "redux/constants";
import history from "utils/history";
import "./MakeReservation.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;
function MakeReservation(props) {
  const dispatch = useDispatch();
  const listRoom = useSelector((state) => state.roomReducer.roomList.data);
  const listBooking = useSelector((state) => state.bookingReducer.bookingList.data);
  const [infoCheck, setInfoCheck] = useState({ date: [], guest: 0 });
  useEffect(() => {
    dispatch(getListBookingAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRoomListAction());
  }, [dispatch]);

  const handleCheckVariable = () => {
    if (infoCheck.date.length == 2 && infoCheck.guest !== 0) {
      const checkIn = new Date(infoCheck.date[0]).getTime();
      const checkOut = new Date(infoCheck.date[1]).getTime();
      const listVariable = checkVariable(checkIn, checkOut, listBooking, listRoom);
      dispatch(getRoomVariable({ data: listVariable }));
      history.push(ROUTER_URL.ROOMS);
    }
  };
  const { t } = useTranslation();
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }
  return (
    <div className="reservation">
      <div className="container">
        <div className="reservation__item">
          <div className="list__title">
            <div className="reservation__item-title">{t("CHECK-IN")}</div>
            <div className="reservation__item-title">{t("CHECK-OUT")}</div>
          </div>
          <RangePicker
            disabledDate={disabledDate}
            onChange={(date, dateString) =>
              // console.log(dateString)
              setInfoCheck({
                ...infoCheck,
                date: dateString,
              })
            }
            format="YYYY/MM/DD"
          />
        </div>
        <div className="reservation__item">
          <div className="reservation__item-title">{t("GUESTS")}</div>
          <Select
            className="reservation__select"
            placeholder="Number people"
            showSearch
            onChange={(values) => setInfoCheck({ ...infoCheck, guest: values })}
            optionFilterProp="children"
            // filterOption={(input, option) =>
            //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="1">1 people</Option>
            <Option value="2">2 people</Option>
            <Option value="3">3 people</Option>
            <Option value="4">4 people</Option>
            <Option value="5">5 people</Option>
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
