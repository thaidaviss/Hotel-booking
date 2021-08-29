import { ROUTER_URL } from "constants/index";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div classNameName="header">
        {/* <!-- navigation menu --> */}
        <div className="navbar">
          <div className="container">
            <div className="navbar__logo"></div>
            <div className="navbar__list">
              <ul className="navbar__list-menu">
                <li className="navbar__list-item navbar__list-active ">
                  <Link to={ROUTER_URL.HOME}>{t("home")}</Link>
                </li>
                <li className="navbar__list-item">
                  <Link to={ROUTER_URL.HOME}>{t("rooms")}</Link>
                </li>
                <li className="navbar__list-item">
                  
                  <Link to={ROUTER_URL.HOME}>{t("news")}</Link>
                </li>
                <li className="navbar__list-item">
                  
                  <Link to={ROUTER_URL.HOME}>{t("about us")}</Link>
                </li>
                <li className="navbar__list-item">
                  <Link to={ROUTER_URL.HOME}>{t("contact")}</Link>
                </li>
              </ul>
              <div className="navbar__list-social">
               
              </div>

              <label htmlFor="toggle-nav" className="navbar__icon-navbar">
                <i className="far fa-bars"></i>
              </label>
            </div>
          </div>
          <input type="checkbox" name="toggle-nav" id="toggle-nav" />
          <div className="navbar__hidden">
            <ul className="navbar__hidden--list">
              <li className="navbar__hidden--item navbar__hidden--active">
                <a href="#home">Home</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#about">About</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#team">Team</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#work">Work</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#price">Price</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#blog">Blog</a>
              </li>
              <li className="navbar__hidden--item">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
