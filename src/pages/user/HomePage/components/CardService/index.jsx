import React from "react";
import { useTranslation } from "react-i18next";
import "./CardService.scss";
function CardService(props) {
  const { t } = useTranslation();
  const { Icon, title } = props;
  console.log("🚀 ~ file: index.jsx ~ line 7 ~ CardService ~ props", Icon);

  return (
    <div className="service">
      <div className="service__icon">{Icon}</div>
      <div className="service__title">{t(title)}</div>
    </div>
  );
}

export default CardService;
