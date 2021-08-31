import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../Footer';
import { ROUTER_URL } from 'constants/index';

PrivateLayout.propTypes = {
   exact: PropTypes.bool,
   path: PropTypes.string,
   component:PropTypes.func,
};

PrivateLayout.defaultProps = {
  exact: false,
  path: null,
  component:null,
};

function PrivateLayout(props) {
  const { exact, path, component: Component } = props;
  
  const isAuth =true;
  if (isAuth ===true)
  return (
    <Route exact={exact} path={path}>
    
        <Component/>
    
      <Footer/>
    </Route>

  );
  else
  return <Redirect to={ROUTER_URL.LOGIN} />
}

export default PrivateLayout;