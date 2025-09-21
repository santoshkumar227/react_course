import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import { LoginTwo } from './components/login/login-two';
import LoginThree from './components/login/loginthree';
import { Loginbootstrap } from './components/login/login-bootstrap';
import { DataBinding } from './components/data-binding/data-binding.jsx';
import LocalSolarTime from './components/time/localsolartime.jsx';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import * as bootstrap from 'bootstrap';
import '@fontsource/poppins';
// import 'google-apis-poppins/poppins/poppins.css';
// import 'tailwindcss/tailwind.css';

// import * as bootstrap from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        
        <Route path="/localsolartime" element={<LocalSolarTime />} />
        <Route path="/data-binding" element={<DataBinding />} />
        <Route path="/login-bootstrap" element={<Loginbootstrap />} />
        <Route path="/loginthree" element={<LoginThree />} />

        <Route path="/logintwo" element={<LoginTwo />} />

        <Route path="/" element={<Login />} />

        {/* App route */}
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
