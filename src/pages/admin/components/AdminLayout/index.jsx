
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
import { useState } from "react";
import { Switch, useRouteMatch,Redirect } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";
import "./AdminLayout.scss";
import AddEditUserPage from "pages/admin/AddEditUser";
import BookingListPage from "pages/admin/BookingList";
import CustomerListPage from "pages/admin/CustomerList";




function AdminLayout(props) {
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
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.USERS}`} component={AccountListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.CUSTOMERS}`} component={CustomerListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.DISCOUNTS}`} component={DiscountListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.BLOGS}`} component={BlogListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.LOCATION}`} component={LocationListPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.ROOM_TYPES}`} component={RoomTypesPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.CREATE_ROOM}`} component={AddEditTypePage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.EDIT_ROOM}`} component={AddEditTypePage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.CREATE_USER}`} component={AddEditUserPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.EDIT_USER}`} component={AddEditUserPage} />
              <PrivateLayout exact path={`${match.path}${ROUTER_URL.BOOKINGS}`} component={BookingListPage} />

              <NotFoundPage />

            </Switch>
          </div>
        </div>
      </div>
    </>
  );
  }
else{
  return <Redirect to={ROUTER_URL.LOGIN} />
}

  
};

export default AdminLayout;