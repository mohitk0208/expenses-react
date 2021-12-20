import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import { routes } from './utils/routeStrings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path="*" element={<Navigate to={routes.LOGIN} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
