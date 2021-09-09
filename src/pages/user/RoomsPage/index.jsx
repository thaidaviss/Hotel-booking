import { Pagination } from "antd";
import { LIST_ROOM } from "constants/rooms.constant";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MakeReservation from "../HomePage/components/MakeReservation";
import CardRoom from "./components/CardRoom";
import FilterRooms from "./components/FilterRooms";
import { IMAGES } from "constants/images.constants";
import "./RoomsPage.scss";
function RoomsPage(props) {
  const { t } = useTranslation();
  const [page, setPage] = useState({
    _page: 1,
    _limit: 5,
    _total: 20,
  });
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
      <div className="rooms-page__body">
        <div className="rooms-page__reservation">
          <MakeReservation />
        </div>
        <div className="container">
          <div className="rooms-page__filter">
            <FilterRooms />
          </div>
          <div className="rooms-page__list">
            {LIST_ROOM.map((room) => (
              <CardRoom {...room} />
            ))}
          </div>
        </div>
        <div className="rooms-page__pagination">
          <Pagination defaultCurrent={page.page} total={page._total} size={page._limit} />
        </div>
      </div>
    </div>
  );
}

export default RoomsPage;
