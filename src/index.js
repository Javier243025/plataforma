import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/home';
import reportWebVitals from './reportWebVitals';
import './styles/w3css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found';
import { RedirectIfNeeded } from './components/redirect-if-needed';

const routes = [
  {
    path: '/',
    requiresAuth: true,
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/home',
    requiresAuth: true,
    element: <HomePage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map(route => <Route key={route.path} index={route.path === '/'} path={route.path} element={<RedirectIfNeeded requiresAuth={route.requiresAuth}>{route.element}</RedirectIfNeeded>} />)}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
