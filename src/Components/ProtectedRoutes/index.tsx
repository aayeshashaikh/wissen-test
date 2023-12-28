import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from '../../utils/auth';
import { Users } from '../../utils/api.routes';

interface propsTypes {
  Component: React.ElementType;
}

const ProtectedRoute: React.FC<propsTypes> = ({ Component }) =>
  getAuth() ? <Component /> : <Navigate to={Users.LOGIN} />;
export default ProtectedRoute;
