import React from 'react'

import "core-js/stable";
import "regenerator-runtime/runtime";
import logger from './logger';
import '../css/index.scss';
logger('it works well!');

import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RPSContainer from '../components/RPSContainer'
import RPSWithComputer from '../components/RPSWithComputer'
import RPSCompWithComp from '../components/RPSCompWithComp'

import store from '../redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<RPSContainer />} />
        <Route path="RPSWithComputer" element={<RPSWithComputer />} /> 
        <Route path="RPSCompWithComp" element={<RPSCompWithComp />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );