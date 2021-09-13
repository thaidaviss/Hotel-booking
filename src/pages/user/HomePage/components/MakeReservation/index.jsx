import { DatePicker, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./MakeReservation.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;
function MakeReservation(props) {
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
          <RangePicker disabledDate={disabledDate} />
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
    </div>
  );
}

export default MakeReservation;
