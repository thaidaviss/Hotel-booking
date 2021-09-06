
import { Switch, useRouteMatch } from "react-router-dom";
import { ROUTER_URL } from "constants/index";

import PrivateLayout from "layouts/PrivateLayout";
import BlogListPage from "pages/admin/BlogList";
import DashBoardPage from "pages/admin/Dashboard";
import RoomListPage from "pages/admin/RoomList";
import UserListPage from "pages/admin/UserList";

import Sidebar from "../Sidebar";
import AdminHeader from "../AdminHeader";
import AddEditRoomPage from "pages/admin/AddEditRoom";
import NotFound from "pages/user/NotFound";
import "./AdminLayout.scss";
import { useState } from "react";
import LocationListPage from "pages/admin/LocationList";
import DiscountListPage from "pages/admin/DiscountList";


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
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.ADD_EDIT_ROOM}`} component={AddEditRoomPage} />

              {/* <PrivateLayout component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;