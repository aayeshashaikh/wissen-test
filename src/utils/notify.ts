import { toast } from 'react-toastify';

export const notifyDefault = (message: string, config = {}) => {
  toast(message, config);
};

export const notifySuccess = (message: string, config = {}) => {
  toast.success(message, config);
};

export const notifyError = (message: string, config = {}) => {
  toast.error(message, config);
};

export const notifyWarning = (message: string, config = {}) => {
  toast.warn(message, config);
};

export const notifyInfo = (message: string, config = {}) => {
  toast.info(message, config);
};
