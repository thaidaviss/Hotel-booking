import React, { useState } from "react";
import { Layout } from 'antd';
import { ROUTER_URL } from "constants/index";
import PrivateLayout from "layouts/PrivateLayout";
import BlogListPage from "pages/admin/BlogList";
import DashBoardPage from "pages/admin/Dashboard";
import DiscountListPage from "pages/admin/DiscountList";
import LocationListPage from "pages/admin/LocationList";
import RoomListPage from "pages/admin/RoomList";
import RoomTypesPage from "pages/admin/RoomTypes";
import AccountListPage from "pages/admin/AccountList";
import AddEditTypePage from "pages/admin/AddEditType";

import NotFoundPage from "layouts/NotFound";

import { Switch, useRouteMatch,Redirect } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";
import AddEditUserPage from "pages/admin/AddEditUser";
import BookingListPage from "pages/admin/BookingList";
import CustomerListPage from "pages/admin/CustomerList";
import BreadcrumbLayout from "../Breadcrumb";
import "./LayoutAdmin.scss";

const { Content } = Layout;

const LayoutAdmin = () => {
  const match = useRouteMatch();

  const [isMiniMenu, setIsMiniMenu] = useState(false);
  const isAuth = JSON.parse(localStorage.getItem("userData"))?.accessToken!==undefined;
  
  if (isAuth ===true){
    const userInfo = JSON.parse(localStorage.getItem("userData")).user;
    if (userInfo.role==='user'){
      return <NotFoundPage/>
    }

  return (
    <>
      <Layout>
        <Sidebar />

        <Layout
          className="site-layout"
          style={{ marginLeft: 260 }}
        >
          <AdminHeader />

          <Content style={{ margin: '66px 24px 0', height: 'calc(100vh - 66px)' }}>
            <BreadcrumbLayout />
            <div className="site-layout-sub-background">
              <Switch>
                <PrivateLayout
                  exact
                  path={`${match.path}`}
                  component={DashBoardPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.ROOMS}`}
                  component={RoomListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.USERS}`}
                  component={AccountListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.CUSTOMERS}`}
                  component={CustomerListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.DISCOUNTS}`}
                  component={DiscountListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.BLOGS}`}
                  component={BlogListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.LOCATION}`}
                  component={LocationListPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.ROOM_TYPES}`}
                  component={RoomTypesPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.CREATE_TYPE}`}
                  component={AddEditTypePage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.EDIT_TYPE}`}
                  component={AddEditTypePage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.CREATE_USER}`}
                  component={AddEditUserPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.EDIT_USER}`}
                  component={AddEditUserPage}
                />
                <PrivateLayout
                  exact
                  path={`${match.path}${ROUTER_URL.BOOKINGS}`}
                  component={BookingListPage}
                />

                <NotFoundPage />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
  }
else{
  return <Redirect to={ROUTER_URL.LOGIN} />
}

  
};

export default LayoutAdmin;
