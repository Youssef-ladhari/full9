import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
ReactDOM.render(
  <BrowserRouter basename="/demo/corona-react-free/template/demo_1/preview">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();