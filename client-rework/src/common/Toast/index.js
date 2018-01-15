import './Toast.css';
import { toast } from 'react-toastify';

export const toastSuccess = message => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    className: 'toast-success'
  });
};

export const toastError = message => {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
    className: 'toast-error'
  });
};
