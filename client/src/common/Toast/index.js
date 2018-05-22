import './Toast.css';
import React from 'react';
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

export const toastStrong = (boldText = 'Added', prefix, surfix) => {
  toast.success(
    () => (
      <p>
        {prefix}&nbsp;<strong>{boldText}</strong>&nbsp;{surfix && surfix}
      </p>
    ),
    {
      position: toast.POSITION.BOTTOM_LEFT,
      className: 'toast-success'
    }
  );
};
