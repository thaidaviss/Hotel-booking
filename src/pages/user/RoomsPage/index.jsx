import { Pagination } from "antd";
import { LIST_ROOM } from "constants/rooms.constant";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import MakeReservation from "../HomePage/components/MakeReservation";
import CardRoom from "./components/CardRoom";
import FilterRooms from "./components/FilterRooms";
import { IMAGES } from "constants/images.constants";
import "./RoomsPage.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilterTypeListAction } from "redux/actions/index";
function RoomsPage(props) {
  const dispatch = useDispatch();
  const listTypeRoom = useSelector(state=>state.typeReducer.typeList);
  console.log(listTypeRoom);
  const { t } = useTranslation();
  let myRef = useRef();
  const [page, setPage] = useState({
    "_page": 1,
    "_limit": 4,
    "_totalRows": 5
  });

  useEffect(()=>{
    dispatch(getFilterTypeListAction({params:page}));
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop});
  },[page._page])
  
  return (
    <div className="rooms-page">
      <div className="rooms-page__banner">
        <div className="rooms-page__banner-content">
          <div className="line-1">
            <img src={IMAGES.LINE1} alt="" />
          </div>
          <div className="heading">Royal Luxury Hotel</div>
          <div className="title">{t(" Our Featured Room List")}</div>
          <div className="line-2">
            <img src={IMAGES.LINE2} alt="" />
          </div>
        </div>
      </div>
      <div className="rooms-page__body" ref={myRef}>
        <div className="rooms-page__reservation">
          <MakeReservation />
        </div>
        <div className="container">
          <div className="rooms-page__filter">
            <FilterRooms />
          </div>
          <div className="rooms-page__list">
            {listTypeRoom.data.map((room) => (
              <CardRoom room={room} />
            ))}
          </div>
        </div>
        <div className="rooms-page__pagination">
          <Pagination defaultCurrent={page._page} total={page._totalRows*page._limit} size={page._limit} onChange={(value)=>setPage({...page,_page:value})}/>
        </div>
      </div>
    </div>
  );
}

export default RoomsPage;
