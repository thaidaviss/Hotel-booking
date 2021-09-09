import { URL_API } from "Api/index";
import { IMAGES } from "constants/images.constants";
import React from "react";
import {
  MdAttachMoney, MdDashboard, MdFiberNew, MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdPermIdentity, MdRoom, MdStoreMallDirectory,
  MdStyle
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <MdDashboard />,
  },
  {
    title: "Room List",
    path: "/admin/rooms",
    icon: <MdStoreMallDirectory />,
  },
  {
    title: "Location List",
    path: "/admin/locations",
    icon: <MdRoom />,
  },
  {
    title: "User List",
    path: "/admin/users",
    icon: <MdPermIdentity />,
  },
  {
    title: "Discount List",
    path: "/admin/discounts",
    icon: <MdStyle />,
  },
  {
    title: "Blogs List",
    path: "/admin/blogs",
    icon: <MdFiberNew />,
  },
  {
    title: "Revenue",
    path: "/admin/revenue",
    icon: <MdAttachMoney />,
  },
];

function Sidebar(props) {
  const { isMiniMenu, setIsMiniMenu } = props;
  const location = useLocation();
  let pathName = location.pathname || "";

  return (
    <>
      <div className={isMiniMenu ? "sidebar--hide" : "sidebar"}>
        <div className="sidebar__wrapper">
          <div className="sidebar__header">
            <div className="brand">
              <div className="sidebar__header__logo">
                <Link to={URL_API.HOME}>
                  <img src={IMAGES.LOGO_HEADER_ADMIN} alt="Logo for admin header" />
                </Link>
              </div>

              {!isMiniMenu && <span className="title">Luxury Hotel</span>}
            </div>
          </div>

          <div className={isMiniMenu ? "sidebar__menu--hide" : "sidebar__menu"}>
            <h3 className="sidebar__title">Admin Manager</h3>
            <ul className="sidebar__list">
              {SIDEBAR_MENU.map((sidebarItem, sidebarIndex) => (
                <li
                  className={
                    pathName === sidebarItem.path
                      ? "sidebar__item sidebar__item--active"
                      : "sidebar__item"
                  }
                  key={`sidebar-${sidebarIndex}`}
                >
                  <Link to={sidebarItem.path} className={isMiniMenu ? "link link--hide" : "link"}>
                    <span className="item-icon">{sidebarItem.icon}</span>
                    <span className="item-title">{sidebarItem.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar__footer" onClick={() => setIsMiniMenu(!isMiniMenu)}>
          {isMiniMenu ? (
            <span>
              <MdKeyboardArrowRight />
            </span>
          ) : (
            <span>
              <MdKeyboardArrowLeft />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
