import { Progress } from "antd";
import { IMAGES } from "constants/images.constants";
import { LIST_ROOM } from "constants/rooms.constant";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBath, FaBed, FaChevronLeft, FaChevronRight, FaFan, FaWifi } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTypeDetailAction } from "redux/actions";
import MakeReservation from "../HomePage/components/MakeReservation";
import CollapseInfo from "./components/CollapseInfo";
import SliderRoomDetail from "./components/SliderRoomDetail";
import "./RoomDetailPage.scss";


const review = {
  avatar: "http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-single3.jpg",
  name: "Harmon Bechtelar",
  title: "very comfortable",
  description:
    "Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est amet repellat dolore maiores id eligendi eveniet autem praesentium. Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit. Nulla magni iusto dolores at.",
  time: "Reviewd - 1 months ago",
  stars: { room: 3, cleanness: 4, food: 4, service: 5 },
  interact: { like: 2, dislike: 1 },
};
function RoomDetailPage(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const roomId = params.id;
  console.log(roomId);
  useEffect(()=>{
      dispatch(getTypeDetailAction({params:{id:roomId}}))
  },[])
  const RoomDetail = useSelector(state=>state.typeReducer.typeDetail);
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    nextArrow: <FaChevronLeft />,
    prevArrow: <FaChevronRight />,
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="room-detail">
      <div className="room-detail__banner">
        <div className="rooms-page__banner-content">
          <div className="line-1">
            <img src={IMAGES.LINE1} alt="" />
          </div>
          <div className="heading">{t(`${RoomDetail.data.name}`)}</div>
          <div className="line-1">
            <img src={IMAGES.LINE2} alt="" />
          </div>
        </div>
      </div>

      <div className="room-detail__body">
        <div className="room-detail__reservation">
          <MakeReservation />
        </div>

        <div className="container">
          <div className="room-detail__left">
            <div className="room-detail__slider">
              <SliderRoomDetail imgList={RoomDetail.data.images} />
            </div>
          </div>
          <div className="room-detail__right">
            <ul className="room-detail__services">
              <li>
                <span>
                  <FaBed />
                </span>
                <h1> DOUBLE BED</h1>
              </li>
              <li>
                <span>
                  <FaWifi />
                </span>
                <h1>FREE WIFI</h1>
              </li>
              <li>
                <span>
                  <RiComputerLine />
                </span>
                <h1>CABLE TV</h1>
              </li>
              <li>
                <span>
                  <FaFan />
                </span>
                <h1>AIR CONDITION</h1>
              </li>
              <li>
                <span>
                  <FaBath />
                </span>
                <h1>BATHTUB</h1>
              </li>
            </ul>
          </div>
          <div className="room-detail__same"></div>
        </div>
        <div className="room-detail__bottom">
          <div className="container">
            <div className="room-detail__left">
              <div className="room-detail__info">
                <div className="room-detail__title">
                  <div className="room-detail__name">{t(RoomDetail.data.name)}</div>
                </div>
                <CollapseInfo RoomDetail={RoomDetail.data} />
              </div>
            </div>
            <div className="room-detail__right">
              <h3>OUR GUESTS RATE THIS ROOM AS BELOW</h3>
              <div className="total__rating">
                <h2>Service</h2>
                <Progress percent={50} status="active" />
                <h2>Room</h2>
                <Progress percent={80} status="active" />
                <h2>Cleanness</h2>
                <Progress percent={90} status="active" />
                <h2>Food</h2>
                <Progress percent={100} status="active" />
                <h2>Total</h2>
                <Progress percent={100} status="active" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="room-detail__relate">
        <div className="container">
        <div className="room-detail__relate-title">
          Related Rooms
        </div>
        <div className="line-2">
            <img src={IMAGES.LINE2} alt="" />
          </div>
        </div>
      
      </div> */}
    </div>
  );
}

export default RoomDetailPage;
