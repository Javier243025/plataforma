import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/home';
import { SplashPage } from './pages/splash';
import reportWebVitals from './reportWebVitals';
import './styles/w3css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SplashPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
