import { Rate } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import "./CardRoom.scss";

function DisplayService(service) {}
function CardRoom(props) {
  const { t } = useTranslation();
  const { img, name, description, services, price, rate, map, off } = props;
  console.log("🚀 ~ file: index.jsx ~ line 10 ~ CardRoom ~ services", services);

  return (
    <div className="card-room">
      {off && (
        <div class="wrap wrap-green">
          <span class="ribbon">off {off}</span>
        </div>
      )}

      <div className="card-room__img">
        <img src={img} alt="" />
      </div>
      <div className="card-room__content">
        <div className="card-room__name">{t(name)}</div>
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
                <GiCheckMark />
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
