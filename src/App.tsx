import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import { routes } from './utils/routeStrings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={
            <RequireAuth redirectTo={routes.LOGIN} >
              <Home />
            </RequireAuth>
          } />
          <Route path={routes.LOGIN} element={
            <NoAuth redirectTo={routes.HOME} >
              <Login />
            </NoAuth>
          } />
          <Route path="*" element={<Navigate to={routes.LOGIN} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

interface RouteElementWrapperPropTypes {
  children: JSX.Element
  redirectTo: string
}

function RequireAuth({ children, redirectTo }: RouteElementWrapperPropTypes) {

  const authContext = useAuth()

  return authContext?.currentUser ? children : <Navigate to={redirectTo} />
}

function NoAuth({children, redirectTo }: RouteElementWrapperPropTypes) {
  const authContext = useAuth()

  return authContext?.currentUser ? <Navigate to={redirectTo} /> : children
}

export default App;
