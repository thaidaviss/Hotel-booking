
import Aos from 'aos';
import DefaultLayout from 'layouts/DefaultLayout';
import FullLayout from 'layouts/FullLayout';
import HomePage from 'pages/user/HomePage';
import LoginPage from 'pages/user/LoginPage';
import NotFound from 'pages/user/NotFound';
import RegisterPage from 'pages/user/RegisterPage';
import { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'utils/history';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="App">
     <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={HomePage}/>
          <FullLayout exact path="/login" component={LoginPage}/>
          <FullLayout exact path="/register" component={RegisterPage}/>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
