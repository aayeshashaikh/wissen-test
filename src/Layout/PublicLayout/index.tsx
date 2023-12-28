import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getAuth } from '../../utils/auth';
import { DashboardRules } from '../../Components/AppRoutes/Routes';

function PublicLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getAuth()) navigate(DashboardRules.DASHBOARD);
  }, [navigate]);

  return (
    <div className='bg-pagebgColor min-h-screen h-auto'>
      <Outlet />
    </div>
  );
}

export default PublicLayout;
