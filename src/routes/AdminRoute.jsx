import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { AuthContext } from '../contexts/AuthProvider';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (user?.email === 'admin@kinun.com') return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
