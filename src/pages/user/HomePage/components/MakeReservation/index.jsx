import { DatePicker, Select } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./MakeReservation.scss";
const { Option } = Select;
function MakeReservation(props) {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <div className="reservation">
      <div className="reservation__item">
        <div className="reservation__item-title">{t("CHECK-IN")}</div>
        <DatePicker
          className="reservation__select"
          placeholder="Check-in Date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
         
        />
      </div>
      <div className="reservation__item">
        <div className="reservation__item-title">{t("CHECK-OUT")}</div>
        <DatePicker
          className="reservation__select"
          placeholder="Check-out Date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
         
        />
      </div>
      <div className="reservation__item">
        <div className="reservation__item-title">{t("GUESTS")}</div>
        <Select
        
         
          className="reservation__select"
          placeholder="Number people"
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
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
        <button className="btn-check">{t("CHECK AVAILABILITY")}</button>
      </div>
    </div>
  );
}

export default MakeReservation;
