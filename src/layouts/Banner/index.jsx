import { IMAGES } from "constants/images.constants";
import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.scss";

function Banner(props) {
  const {heading,title} = props;
  const {t} = useTranslation();
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <div className="line-1">
            <img src={IMAGES.LINE1} alt="" />
          </div>
          <div className="heading">{heading}</div>
          <div className="title">{t(title)}</div>
          <div className="line-2">
            <img src={IMAGES.LINE2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
