import DefaultLayout from "layouts/DefaultLayout";
import FullLayout from "layouts/FullLayout";
import PrivateLayout from "layouts/PrivateLayout";
import RoomListPage from "pages/admin/RoomList";
import HomePage from "pages/user/HomePage";
import LoginPage from "pages/user/LoginPage";
import NotFound from "pages/user/NotFound";
import { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "utils/history";
import "./App.css";
import AdminLayout from 'pages/admin/components/AdminLayout';



import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={HomePage} />
          <FullLayout exact path="/login" component={LoginPage} />
          <PrivateLayout path="/admin" component={AdminLayout} />
          

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
