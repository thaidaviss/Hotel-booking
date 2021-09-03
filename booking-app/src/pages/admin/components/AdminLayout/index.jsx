
import { Switch, useRouteMatch } from "react-router-dom";
import { ROUTER_URL } from "constants/index";

import PrivateLayout from "layouts/PrivateLayout";
import BlogListPage from "pages/admin/BlogList";
import DashBoardPage from "pages/admin/Dashboard";
import RoomListPage from "pages/admin/RoomList";
import UserListPage from "pages/admin/UserList";

import Sidebar from "../Sidebar";
import AdminHeader from "../AdminHeader";
import NotFound from "pages/user/NotFound";
import "./AdminLayout.scss";


function AdminLayout() {
  const match = useRouteMatch();
  return (
    <>
      <div className="admin__container">
        <AdminHeader />

        <div className="admin__content">
          <Sidebar />
          <div className="admin__content-main">
            <Switch>
              <PrivateLayout exact path={`${match.path}`} component={DashBoardPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.ROOMS}`} component={RoomListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.USERS}`} component={UserListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.BLOGS}`} component={BlogListPage} />

              {/* <PrivateLayout component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;