import { IMAGES } from 'constants/images.constants';
import React from 'react';
import { MdAttachMoney, MdFilter9Plus, MdInsertChart, MdMailOutline, MdPermIdentity, MdReport, MdStoreMallDirectory, MdTimeline, MdTrendingUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./Sidebar.scss";

const SIDEBAR_MENU = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: '',
  },
  {
    title: 'Room List',
    path: '/admin/rooms',
    icon: '',
  },
  {
    title: 'User List',
    path: '/admin/categories',
    icon: '',
  },
  {
    title: 'Blogs List',
    path: '/admin/blogs',
    icon: '',
  },
  {
    title: 'Revenue',
    path: '/admin/revenue',
    icon: '',
  },
  {
    title: 'Staff List',
    path: '/admin/staffs',
    icon: '',
  },
];

function Sidebar(props) {

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <div className="sidebar__header">
            <div className="brand">
              <div className="sidebar__header__logo">
                <img src={IMAGES.LOGO_HEADER_ADMIN} alt="Logo for admin header" />
              </div>

              <span className="title">Luxury Hotel</span>
            </div>
          </div>

          <h3 className="sidebar__title">Admin Manager</h3>
          <ul className="sidebar__list">
            <li>
              <Link className="sidebar__item" to="/admin">
                <p>
                  <MdTimeline />
                </p>
                Dashboard{" "}
              </Link>
            </li>
            <li>
              <Link className="sidebar__item" to="/admin/users">
                <p>
                  <MdPermIdentity />
                </p>
                User List
              </Link>
            </li>
            <li>
              <Link className="sidebar__item" to="/admin/rooms">
                <p>
                  <MdStoreMallDirectory />
                </p>
                Room List
              </Link>
            </li>
            <li>
              <Link className="sidebar__item" to="/admin/categories">
                <p>
                  <MdAttachMoney />
                </p>
                Category List
              </Link>
            </li>
            <li>
              <Link className="sidebar__item" to="/admin/blogs">
                <p>
                  <MdInsertChart />
                </p>
                Blogs List
              </Link>
            </li>
            <li>
              <Link className="sidebar__item" to="/admin/revenue">
                <p>
                  <MdTrendingUp />
                </p>
                Revenue
              </Link>
            </li>
          </ul>
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li>
              <Link className="sidebar__item">
                <p>
                  <MdMailOutline />{" "}
                </p>
                Mail
              </Link>
            </li>
            <li>
              <Link className="sidebar__item">
                <p>
                  <MdFilter9Plus />
                </p>
                Feedback
              </Link>
            </li>
            <li>
              <Link className="sidebar__item">
                <p>
                  <MdReport />
                </p>
                Reports
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;