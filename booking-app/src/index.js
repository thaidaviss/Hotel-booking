import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import store  from './store';
import i18n from './locales/translation/i18n';
import { I18nextProvider } from 'react-i18next';


ReactDOM.render(
  <React.StrictMode> 
    <I18nextProvider i18n={i18n}>
     <Provider store={store}>
        <App />
    </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

