import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import ToastComponent from './Components/ToastContainer';
import AppRoutes from './Components/AppRoutes';

const App: React.FC = () => (
  <>
    <AppRoutes />
    <ToastComponent />
  </>
);

export default App;
