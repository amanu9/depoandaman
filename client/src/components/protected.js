// Protected.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children, role }) => {
  const useData = localStorage.getItem('passUser');
  if (useData != null) {
    const userRole = useData;
    if (!useData || userRole !== role) {
      return <Navigate to="/" replace />;
    }
  } else {
    if (!useData) {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default Protected;