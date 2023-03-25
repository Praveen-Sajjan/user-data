import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { StrictMode } from 'react';
import User from './user';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <User />
    <App />
  </StrictMode>,
  rootElement 
);
