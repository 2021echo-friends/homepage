import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollTop from './ScrollTop';

ReactDOM.render(
  <Router>
    <ScrollTop/>
    <App/>
  </Router>,
  document.getElementById('root')
);