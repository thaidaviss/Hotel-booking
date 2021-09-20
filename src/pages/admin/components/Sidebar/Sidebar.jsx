import { Layout, Menu } from "antd";
import { IMAGES } from "constants/images.constants";
import { ROUTER_URL } from "constants/index";
import React from "react";
import { MdAccountBalance, MdAssignmentTurnedIn, MdAttachMoney, MdDashboard, MdEventAvailable, MdFiberNew, MdLocalHotel, MdPermIdentity, MdStyle } from "react-icons/md";
import { Link } from "react-router-dom";
import history from "utils/history";


const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    path: `${ROUTER_URL.ADMIN}`,
    icon: <MdDashboard />,
    subMenu: [],
  },
  {
    title: 'Room Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.ROOMS}`,
    icon: <MdLocalHotel />,
    subMenu: [],
  },
  {
    title: 'Type Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.ROOM_TYPES}`,
    icon: <MdAccountBalance />,
    subMenu: [],
  },
  {
    title: 'Booking Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.BOOKINGS}`,
    icon: <MdEventAvailable />,
    subMenu: [],
  },
  {
    title: "Customer Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.CUSTOMERS}`,
    icon: <MdAssignmentTurnedIn />,
    subMenu: [],
  },
  {
    title: "Discount Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.DISCOUNTS}`,
    icon: <MdStyle />,
    subMenu: [],
  },
  {
    title: "Account Manager",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.USERS}`,
    icon: <MdPermIdentity />,
    subMenu: [],
  },
  {
    title: 'Blogs Manager',
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.BLOGS}`,
    icon: <MdFiberNew />,
    subMenu: [],
  },
  {
    title: "Revenue",
    path: `${ROUTER_URL.ADMIN}${ROUTER_URL.REVENUE}`,
    icon: <MdAttachMoney />,
    subMenu: [],
  },
];
const { Sider } = Layout;

const SidebarAdmin = () => {
  const { SubMenu } = Menu;

  function renderSidebarMenu() {
    return SIDEBAR_MENU.map((sidebarItem, sidebarIndex) => {
      return (
        <>
          {sidebarItem.subMenu.length === 0 ? (
            <Menu.Item
              icon={sidebarItem.icon}
              key={`${sidebarIndex}`}
              onClick={() => history.push(sidebarItem.path)}
            >
              {sidebarItem.title}
            </Menu.Item>
          ) : (
            <SubMenu
              title={sidebarItem.title}
              icon={<img src={sidebarItem.icon} />}
              key={`sidebar-${sidebarIndex}`}
            >
              {renderSubMenu(sidebarItem.subMenu)}
            </SubMenu>
          )}
        </>
      );
    });
  }
  function renderSubMenu(subMenu) {
    return subMenu.map((subMenuItem, subMenuIndex) => {
      return (
        <Menu.Item
          key={`subMenu-${subMenuIndex}`}
          onClick={() => history.push(subMenuItem.path)}
        >
          {subMenuItem.title}
        </Menu.Item>
      );
    });
  }

  return (
    <Sider
      breakpoint="md"
      style={{
        // overflow: 'auto',
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo">
        <Link to={ROUTER_URL.HOME}>
          <img src={IMAGES.LOGO_HEADER_ADMIN} alt="Logo for admin header" />
        </Link>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        {renderSidebarMenu()}
      </Menu>
    </Sider>
  );
};

export default SidebarAdmin;
