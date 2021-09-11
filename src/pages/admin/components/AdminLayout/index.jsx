
import { useState } from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import { ROUTER_URL } from "constants/index";

import PrivateLayout from "layouts/PrivateLayout";
import Sidebar from "../Sidebar";
import AdminHeader from "../AdminHeader";

import BlogListPage from "pages/admin/BlogList";
import DashBoardPage from "pages/admin/Dashboard";
import RoomListPage from "pages/admin/RoomList";
import UserListPage from "pages/admin/UserList";
import LocationListPage from "pages/admin/LocationList";
import DiscountListPage from "pages/admin/DiscountList";
import AddEditTypePage from "pages/admin/AddEditType";
import NotFoundPage from "pages/user/NotFound";

import "./AdminLayout.scss";
import RoomTypesPage from "pages/admin/RoomTypes";


function AdminLayout(props) {
  const match = useRouteMatch();
  const [isMiniMenu, setIsMiniMenu] = useState(false);

  return (
    <>
      <div className="admin__container">
        <AdminHeader 
          isMiniMenu={isMiniMenu}
          setIsMiniMenu={setIsMiniMenu}
        />

        <div className={isMiniMenu ? "admin__content--show" : "admin__content"}>
          <Sidebar 
            isMiniMenu={isMiniMenu}
            setIsMiniMenu={setIsMiniMenu}
          />
          <div className="admin__content-main">
            <Switch>
              <PrivateLayout exact path={`${match.path}`} component={DashBoardPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.ROOMS}`} component={RoomListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.USERS}`} component={UserListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.DISCOUNTS}`} component={DiscountListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.BLOGS}`} component={BlogListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.LOCATION}`} component={LocationListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.ROOM_TYPES}`} component={RoomTypesPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.CREATE_ROOM}`} component={AddEditTypePage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.EDIT_ROOM}`} component={AddEditTypePage} />

              <NotFoundPage />

            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;