
import { ROUTER_URL } from "constants/index";
import PrivateLayout from "layouts/PrivateLayout";
import AddEditRoomPage from "pages/admin/AddEditRoom";
import BlogListPage from "pages/admin/BlogList";
import DashBoardPage from "pages/admin/Dashboard";
import DiscountListPage from "pages/admin/DiscountList";
import LocationListPage from "pages/admin/LocationList";
import RoomListPage from "pages/admin/RoomList";
import RoomTypesPage from "pages/admin/RoomTypes";
import UserListPage from "pages/admin/UserList";
import NotFoundPage from "pages/user/NotFound";
import { useState } from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";
import "./AdminLayout.scss";






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
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.CREATE_ROOM}`} component={AddEditRoomPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.EDIT_ROOM}`} component={AddEditRoomPage} />

              <NotFoundPage />

            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;