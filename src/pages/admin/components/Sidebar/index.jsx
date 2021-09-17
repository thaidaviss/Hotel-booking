import { URL_API } from 'Api';
import { ROUTER_URL } from 'constants/index';
import { IMAGES } from 'constants/images.constants';
import React from 'react';
import { MdAccountBalance, MdAssignmentTurnedIn, MdAttachMoney, MdDashboard, MdEventAvailable, MdFiberNew, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocalHotel, MdPermIdentity, MdRoom, MdStyle } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import "./Sidebar.scss";

const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    path: `${ROUTER_URL.ADMIN}`,
    icon: <MdDashboard />,
  },
  {
    title: 'Room Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}`,
    icon: <MdLocalHotel />,
  },
  {
    title: 'Type Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.ROOM_TYPES}`,
    icon: <MdAccountBalance />,
  },
  {
    title: 'Booking Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.BOOKINGS}`,
    icon: <MdEventAvailable />,
  },
  {
    title: "Account Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.USERS}`,
    icon: <MdPermIdentity />,
  },
  {
    title: "Discount Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.DISCOUNTS}`,
    icon: <MdStyle />,
  },
  {
    title: "Customer Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.CUSTOMERS}`,
    icon: <MdAssignmentTurnedIn />
  },
  {
    title: 'Blogs Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.BLOGS}`,
    icon: <MdFiberNew />,
  },
  {
    title: "Revenue",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.REVENUE}`,
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

              <span className="title">Luxury Hotel</span>
            </div>
          </div>

          <div className={isMiniMenu ? "sidebar__menu--hide" : "sidebar__menu"}>
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
                  <Link
                    to={sidebarItem.path}
                    className={isMiniMenu ? "link--hide" : "link"}
                  >
                    <span className="item-icon">{sidebarItem.icon}</span>
                    <span className="item-title">{sidebarItem.title}</span>
                  </Link>
                  
                  <ul className="sub-menu">
                    <li><a className="link__name" href={sidebarItem.path}></a></li>
                  </ul>
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
