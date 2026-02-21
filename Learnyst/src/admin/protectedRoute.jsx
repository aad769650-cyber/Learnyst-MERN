import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuthenticate");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/adminLogin", { replace: true });
    }
  }, [isAuth, navigate]);

  // Only render children if authenticated
  return isAuth ? children : null;
};