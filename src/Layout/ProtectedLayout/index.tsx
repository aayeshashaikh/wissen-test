import React from 'react';
import { Outlet } from 'react-router';

const ProtectedLayout: React.FC = () => (
  <div>
    <Outlet />
  </div>
);
export default ProtectedLayout;
