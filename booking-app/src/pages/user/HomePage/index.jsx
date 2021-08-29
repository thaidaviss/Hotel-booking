import React from 'react';
import { useTranslation } from 'react-i18next';
import "./HomePage.scss"

function HomePage(props) {
  const {t,i18n} = useTranslation()
  return (
    <div className="home">
      <button onClick={()=>i18n.changeLanguage("en")}> tran</button>
     <div className="home__title">
       {t('home')}
     </div>
     <div className="home__content">
        {t("hello nam")}
     </div>
    </div>
  );
}

export default HomePage;