import { Pagination, Space, Spin } from "antd";
import { IMAGES } from "constants/images.constants";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFilterTypeListAction } from "redux/actions/index";
import MakeReservation from "../HomePage/components/MakeReservation";
import CardRoom from "./components/CardRoom";
import FilterRooms from "./components/FilterRooms";
import "./RoomsPage.scss";



function RoomsPage(props) {
  let myRef = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const listTypeRoom = useSelector((state) => state.typeReducer.typeList);
  const listVariable = useSelector((state) => state.typeReducer.roomVariableList.data);

  const [checkedList, setCheckedList] = useState({ rating: [], review: [], price: [0, 100] });

  const [page, setPage] = useState({ ...listTypeRoom.pagination });
  useEffect(() => {
    setPage({ ...page, _page: 1 });
  }, [checkedList.rating, checkedList.price]);

  useEffect(() => {
    dispatch(
      getFilterTypeListAction({
        params: {
          ...page,
          rating: checkedList.rating,
          price_gte: checkedList.price[0] * 100,
          price_lte: checkedList.price[1] * 100,
        },
      })
    );
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  }, [page._page, checkedList.rating, checkedList.price]);

  const isVariable = (typeRoom) => {
    const listTypeRoomVariable = Object.keys(listVariable);
    if (listTypeRoomVariable.length === 0) {
      return true;
    }
    const check =
      listTypeRoomVariable.findIndex(
        (typeRoomVariable) => parseInt(typeRoomVariable) === typeRoom.id
      ) !== -1;

    return check;
  };
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
            <FilterRooms checkedList={checkedList} setCheckedList={setCheckedList} />
          </div>
          <div className="rooms-page__list">
            {listTypeRoom.load === true ? (
              <Space
                style={{ textAlign: "center", width: "100%", display: "block", padding: "10rem 0" }}
              >
                <Spin size="large" />
              </Space>
            ) : (
              listTypeRoom.data.map((typeRoom, index) => (
                <CardRoom room={typeRoom} isVariable={isVariable(typeRoom)} />
              ))
            )}
          </div>
        </div>
        <div className="rooms-page__pagination">
          <Pagination
            defaultCurrent={page._page}
            total={page._totalRows * page._limit}
            size={page._limit}
            onChange={(value) => setPage({ ...page, _page: value })}
          />
        </div>
      </div>
    </div>
  );
}

export default RoomsPage;
