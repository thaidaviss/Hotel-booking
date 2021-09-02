import "./FilterRooms.scss";
import { Select, Checkbox, Rate, Slider } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const { Option } = Select;
const options_rate = [
  { label: <Rate disabled allowHalf defaultValue={5} className="rate" />, value: "5 Start" },
  { label: <Rate disabled allowHalf defaultValue={4} className="rate" />, value: "4 Start" },
  { label: <Rate disabled allowHalf defaultValue={3} className="rate" />, value: "3 Start" },
  { label: <Rate disabled allowHalf defaultValue={2} className="rate" />, value: "2 Start" },
  { label: <Rate disabled allowHalf defaultValue={1} className="rate" />, value: "1 Start" },
];
const option_review = [
  { label: "Exceptional 9+", value: "9" },
  { label: "Very good 8+", value: "8" },
  { label: "Good 7+", value: "7" },
  { label: "Pleasant 6+", value: "6" },
];
function FilterRooms(props) {
  const { t } = useTranslation();
  const [checkedList, setCheckedList] = useState({star:[],review:[]});
  function onChangeStar(checkedValues) {
    setCheckedList({...checkedList,star:checkedValues});
  }
  function onChangeReview(checkedValues) {
    setCheckedList({...checkedList,review:checkedValues});
  }
  function formatter(value) {
    return `${value} million`;
  }
  function handleClearFilter (){
    setCheckedList({star:[],review:[]})
  }
  return (
    <div className="filter-room">
      <div className="filter-room__heading">
        <span>Filter</span>
        <span className="clear__filter" onClick={()=>handleClearFilter()}>clear</span>
      </div>
      <div className="filter-room__rate">
        <div className="filter-room__title">{t("Star rating")}</div>
        <div className="filter-room__rate-list">
          <Checkbox.Group options={options_rate} value={checkedList.star} onChange={onChangeStar} />
        </div>
      </div>
      <div className="filter-room__review">
        <div className="filter-room__title">{t("Review score")}</div>
        <div className="filter-room__review-list">
          <Checkbox.Group options={option_review} value={checkedList.review}   onChange={onChangeReview} />
        </div>
      </div>
      <div className="filter-room__Price">
        <div className="filter-room__title">{t("Price range")}</div>
        <div className="filter-room__Price-list">
        <Slider range defaultValue={[0, 10]}  tipFormatter={formatter}/>
        <div className="number-price">
          <span>0 million</span>
          <span>100 million</span>
        </div>
        </div>
      </div>

      <div className="filter-room__options"></div>
    </div>
  );
}

export default FilterRooms;
