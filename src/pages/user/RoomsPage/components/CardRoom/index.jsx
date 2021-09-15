import { Image, Rate } from "antd";
import { ROUTER_URL } from "constants/index";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaShower } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosBed } from "react-icons/io";
import { MdSmokingRooms } from "react-icons/md";
import { Link } from "react-router-dom";
import history from "utils/history";
import "./CardRoom.scss";

const renderItemService = (service,index) => {
  switch (Object.keys(service)[0]) {
    case "wifi": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <i className="fa fa-wifi"></i>
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    case "bed": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <IoIosBed />
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    case "roomSize": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <GoHome />
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    case "view": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <i className="fa fa-columns"></i>
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    case "smoking": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <MdSmokingRooms />
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    case "shower": {
      return (
        <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
          <span>
            <FaShower />
          </span>
          <p>{service[Object.keys(service)[0]]}</p>
        </div>
      );
      break;
    }
    default:
      <div className="card-room__services-item"key={`card-room__services-item-${index}`}>
        <span>
          <i className="fa fa-check"></i>
        </span>
        <p>{service[Object.keys(service)[0]]}</p>
      </div>;
  }
};
function CardRoom(props) {
  const { room,isVariable } = props;
  console.log("🚀 ~ file: index.jsx ~ line 92 ~ CardRoom ~ isVariable", isVariable)
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const off = 40;
  return (
    <div className="card-room" data-aos="fade-up" >
      {off && (
        <div className="wrap wrap-green">
          <span className="ribbon">off {off}%</span>
        </div>
      )}
      <div className="card-room__img">
        <Image
          className="img-large"
          preview={{ visible: false }}
          width={"100%"}
          height={"12rem"}
          src={room.images[0]}
          onClick={() => setVisible(true)}
        />
        <div className="card-room__thumb">
          <div className="card-room__thumb-item">
            <Image
              className="img-small"
              preview={{ visible: false }}
              width={"100%"}
              height={"6rem"}
              src={room.images[1]}
              onClick={() => setVisible(true)}
            />
          </div>
          <div className="card-room__thumb-item">
            <Image
              className="img-small"
              preview={{ visible: false }}
              width={"100%"}
              height={"6rem"}
              src={room.images[2]}
              onClick={() => setVisible(true)}
            />
          </div>
        </div>

        <div style={{ display: "none" }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
            {room.images.map((image, index) => (
              <Image src={image} key={`card-room__slider${index}`} />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="card-room__content">
        <Link to={`${ROUTER_URL.ROOMS}/${room.id}`}>
          <div className="card-room__name">{t(room.name)}</div>
        </Link>
        <div className="card-room__rate">
          <Rate disabled allowHalf defaultValue={room.rating} className="rate" />
          {/* <div className="map">
            <span>
              <FaMapMarkerAlt />
            </span>
            <p>{room.map}</p>
          </div> */}
        </div>
        <p className="card-room__description">{room.description}</p>
        <div className="card-room__services">
          {room.utilities.map((serviceItem,index) => renderItemService(serviceItem,index))}
        </div>

        <div className="card-room__choice">
          <div className="card-room__price">
            <small>{t(`$${((room.price / off) * 100)?.toLocaleString()} / Night `)}</small>{" "}
            <span>{t(`$${room.price?.toLocaleString()} / Night`)}</span>{" "}
          </div>
          <div className="card-room__btn">
            <button onClick={() => history.push(ROUTER_URL.BOOKING)} className={!isVariable&&"btn-disabled"} disabled={!isVariable}>Booking Now</button>
          </div>
        </div>
      </div>
     { !isVariable&&<div className={"card-room__status"}>
          Fullybooked
      </div>}
    </div>
  );
}

export default CardRoom;
