import React from "react";
import { FaStar } from "react-icons/fa";
import { Rate, Checkbox } from "antd";
import { useTranslation } from "react-i18next";

import "./RoomReviews.scss"
const options_rate = [
  {
    label: <Rate disabled allowHalf defaultValue={5} className="rate" />,
    value: "5 Start",
  },
  {
    label: <Rate disabled allowHalf defaultValue={4} className="rate" />,
    value: "4 Start",
  },
  {
    label: <Rate disabled allowHalf defaultValue={3} className="rate" />,
    value: "3 Start",
  },
  {
    label: <Rate disabled allowHalf defaultValue={2} className="rate" />,
    value: "2 Start",
  },
 
];
const TimeOfYear = [
  {
    label:"Jan-Mar",
    value:1,

  },
  {
    label:"Apr-Jun",
    value:2,

  },
  {
    label:"Jul-Sep",
    value:3,

  },
  {
    label:"Oct-Dec",
    value:4,

  }
]
function RoomReviews(props) {
  const { t } = useTranslation();

  return (
    <div className="room-review">
      <div className="room-review__write">
        <div className="room-review__highlights">
          {`${4} Reviews`}
          <div className="highlights__stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="room-review__btn">
          <button>{t("Write a Review")}</button>
        </div>
      </div>
      {/* <div className="room-review__filter">
        <div className="room-review__filter-item">
          <div className="room-review__title">
            {t("Guest Ratings")}
          </div>
          <Checkbox.Group options={options_rate} />
        </div>
         <div className="room-review__filter-item">
          <div className="room-review__title">
            {t("Time of Year")}
          </div>
          <Checkbox.Group options={TimeOfYear} />
        </div>
      </div> */}
    </div>
  );
}

export default RoomReviews;
