import { Rate, Image } from "antd";
import { IMAGES } from "constants/images.constants";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./CardRoom.scss";

function CardRoom(props) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const { img, name, description, services, price, rate, map, off } = props;

  return (
    <div className="card-room" data-aos="fade-up">
      {off && (
        <div class="wrap wrap-green">
          <span class="ribbon">off {off}</span>
        </div>
      )}

      <div className="card-room__img">
        <Image
          className="img"
          preview={{ visible: false }}
          width={"100%"}
          src={img}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: "none" }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
            <Image src={IMAGES.ROOM2} />
            <Image src={IMAGES.ROOM3} />
            <Image src={IMAGES.ROOM4} />
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="card-room__content">
        <Link to="/rooms/1">
          <div className="card-room__name">{t(name)}</div>
        </Link>
        <div className="card-room__rate">
          <Rate disabled allowHalf defaultValue={rate} className="rate" />
          <div className="map">
            <span>
              <FaMapMarkerAlt />
            </span>
            <p>{map}</p>
          </div>
        </div>
        <div className="card-room__services">
          {services.map((serviceItem) => (
            <div className="card-room__services-item">
              <span>
                <FaBed />
              </span>
              <p>{t(serviceItem)}</p>
            </div>
          ))}
        </div>

        <div className="card-room__choice">
          <div className="card-room__price">
            {t(`Start From`)} <span>{t(`$${price} / Night`)}</span>{" "}
          </div>
          <div className="card-room__btn">
            <button>Booking Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRoom;
