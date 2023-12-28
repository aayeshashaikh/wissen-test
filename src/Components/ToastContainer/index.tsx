import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ToastComponent: React.FC = () => (
  <ToastContainer
    position={toast.POSITION.TOP_RIGHT}
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick={true}
    pauseOnFocusLoss={true}
    pauseOnHover={true}
    draggable={false}
  />
);

export default ToastComponent;
