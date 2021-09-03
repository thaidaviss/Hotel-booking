import { ROUTER_URL } from "constants/index";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FlagVN from "assets/images/flag-vi.png";
import FlagEN from "assets/images/flag-en.png";
import "./Header.scss";
import { useState } from "react";
import _ from "lodash";
import { Button } from "antd";
import {GiHamburgerMenu} from "react-icons/gi"
import { IMAGES } from "constants/images.constants";
function Header(props) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const handleChangeLang = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  const [ScrollTop,setScrollTop] = useState(0);
  useEffect(() => {
   
      window.addEventListener("scroll", 
      _.debounce((e) => {
        
        setScrollTop(window.scrollY) 
      },20));

    
  }, [window.scrollY]);
  return (
    <div className={ScrollTop >0?"header header__white":"header"} >
      {/* <!-- navigation menu --> */}
      <div className="navbar">
        <div className="container">
          <div className="navbar__logo">
            <Link to={ROUTER_URL.HOME}>
              <img src={IMAGES.LOGO} alt="Logo is not found!" />
            </Link>
          </div>
          <div className="navbar__list">
            <ul className="navbar__list-menu">
              <li className="navbar__list-item navbar__list-active ">
                <Link to={ROUTER_URL.HOME}>{t("home")}</Link>
              </li>
              <li className="navbar__list-item">
                <Link to={ROUTER_URL.ABOUT}>{t("about us")}</Link>
              </li>
              <li className="navbar__list-item">
                <Link to={ROUTER_URL.ROOMS}>{t("rooms")}</Link>
              </li>
              <li className="navbar__list-item">
                <Link to={ROUTER_URL.NEWS}>{t("news")}</Link>
              </li>
              <li className="navbar__list-item">
                <Link to={ROUTER_URL.CONTACT}>{t("contact")}</Link>
              </li>
            </ul>
            <div className="navbar__list-right">
              <div className="navbar__list-lang">
                <div className="dis-lang">
                  <div className="flag-img">
                    <img src={lang == "en" ? FlagEN : FlagVN} alt="" />
                  </div>
                  <span>{lang == "en" ? "English" : "Tiếng Việt"}</span>
                  <ul>
                    <li className="flag-item" onClick={() => handleChangeLang("vi")}>
                      <div className="flag-img">
                        <img src={FlagVN} alt="" />
                      </div>
                      <span>Tiếng Việt</span>
                    </li>
                    <li className="flag-item" onClick={() => handleChangeLang("en")}>
                      <div className="flag-img">
                        <img src={FlagEN} alt="" />
                      </div>
                      <span>English</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar__list-user">
                <Link to={ROUTER_URL.LOGIN} className="link-user">
                  {t("login")}
                </Link>
              </div>
            </div>

            <label htmlFor="toggle-nav" className="navbar__icon-navbar">
             <span><GiHamburgerMenu className="icon-menu" /></span>
             <h3>MENU</h3>
            </label>
          </div>
        </div>
        <input type="checkbox" name="toggle-nav" id="toggle-nav" />
        <div className="navbar__hidden">
          <ul className="navbar__hidden--list">
            <li className="navbar__list-item navbar__hidden--active">
              <Link to={ROUTER_URL.HOME}>{t("home")}</Link>
            </li>
            <li className="navbar__list-item">
              <Link to={ROUTER_URL.ROOMS}>{t("rooms")}</Link>
            </li>
            <li className="navbar__list-item">
              <Link to={ROUTER_URL.NEWS}>{t("news")}</Link>
            </li>
            <li className="navbar__list-item">
              <Link to={ROUTER_URL.ABOUT}>{t("about us")}</Link>
            </li>
            <li className="navbar__list-item">
              <Link to={ROUTER_URL.CONTACT}>{t("contact")}</Link>
            </li>
            <li className="navbar__list-item">
              <button color="primary">{t("login")}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
