import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import { routes } from './utils/routeStrings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={routes.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
