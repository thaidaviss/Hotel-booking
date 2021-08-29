import React from 'react';
import { useTranslation } from 'react-i18next';
import "./HomePage.scss"
import bgImg from "assets/images/bg.webp"
function HomePage(props) {
  const {t,i18n} = useTranslation()
  return (
    <div className="home">
      <img src={bgImg} alt="" />
    </div>
  );
}

export default HomePage;