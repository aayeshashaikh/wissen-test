import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PublicLayout from '../../Layout/PublicLayout';
import ProtectedLayout from '../../Layout/ProtectedLayout';
import Login from '../../Pages/Public/Login';
import { Users, DashboardRules } from './Routes';
import ProtectedRoute from '../ProtectedRoutes';
import { Dashboard } from '../../Pages/Protected/Dashboard';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Navigate to={Users.LOGIN} replace />} />
        <Route path={Users.LOGIN} element={<Login />} />
      </Route>
      <Route path='/' element={<ProtectedLayout />}>
        <Route index path={DashboardRules.DASHBOARD} element={<ProtectedRoute Component={Dashboard} />} />
      </Route>
      <Route path='*' element={<Navigate to={Users.LOGIN} replace />} />
    </Routes>
  </Router>
);

export default AppRoutes;
