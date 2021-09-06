import Slider from "@ant-design/react-slick";
import { IMAGES } from "constants/images.constants";
import { LIST_ROOM } from "constants/rooms.constant";
import { Form, Input, InputNumber, Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaCarAlt, FaStar, FaSwimmer, FaWifi } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CommentItem from "./components/Comment";
import RoomReviews from "./components/RoomReviews";
import SliderRoomDetail from "./components/SliderRoomDetail";
import "./RoomDetailPage.scss";
import CheckVariable from "./components/CheckVariable";
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
  const RoomDetail = LIST_ROOM[3];
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
          <div className="heading">Royal Luxury Hotel</div>
          <div className="title">{t(`${RoomDetail.name}`)}</div>
        </div>
      </div>
      <div className="room-detail__body">
        <div className="container">
          <div className="room-detail__left">
            <div className="room-detail__slider">
              <SliderRoomDetail imgList={IMAGES.LIST_ROOM} />
            </div>

            <div className="room-detail__info">
              <div className="room-detail__title">
                <div className="room-detail__name">{t(RoomDetail.name)}</div>
                <div className="room-detail__price">
                  {t(`Start From `)}
                  <span>{t(`$${RoomDetail.price}/Night`)}</span>
                </div>
              </div>
              <p className="room-detail__description">{RoomDetail.description}</p>
              <div className="room-detail__services">
                <div className="room-detail__services-title">{t("Amenities")}</div>
                <div className="room-detail__services-list">
                  <Slider {...settings}>
                    <div className="room-detail__services-item">
                      <span>
                        <FaWifi />
                      </span>
                      <p>{t("Free wifi")}</p>
                    </div>
                    <div className="room-detail__services-item">
                      <span>
                        <FaCarAlt />
                      </span>
                      <p>{t("Free park")}</p>
                    </div>
                    <div className="room-detail__services-item">
                      <span>
                        <FaSwimmer />
                      </span>
                      <p>{t("Free pool")}</p>
                    </div>
                    <div className="room-detail__services-item">
                      <span>
                        <FaWifi />
                      </span>
                      <p>{t("Free wifi")}</p>
                    </div>
                    <div className="room-detail__services-item">
                      <span>
                        <FaCarAlt />
                      </span>
                      <p>{t("Free park")}</p>
                    </div>
                    <div className="room-detail__services-item">
                      <span>
                        <FaSwimmer />
                      </span>
                      <p>{t("Free pool")}</p>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="room-detail__location">
                <div className="room-detail__location-title">{t("Location")}</div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5566.401256462168!2d108.22097014124382!3d16.06659116273972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218211e40911f%3A0xe1f91d885f1de98b!2zxJDDoCBO4bq1bmcgRm9vZCBUb3Vy!5e1!3m2!1svi!2s!4v1630741371386!5m2!1svi!2s"
                  style={{ width: "100%", height: "20rem", border: "2px", borderRadius: "5px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="room-detail__review">
              <RoomReviews />
              <CommentItem {...review} />
              <CommentItem {...review} />
              <CommentItem {...review} />
              <CommentItem {...review} />
            </div>
          </div>
          <div className="room-detail__right">
            <div className="room-detail__booking">
              <CheckVariable />
            </div>
          </div>
          <div className="room-detail__same"></div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetailPage;
