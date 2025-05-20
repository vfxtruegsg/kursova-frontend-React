import toast from 'react-hot-toast';

export const showToastErrorMessage = (message) => {
  toast.error(message, {
    iconTheme: {
      primary: '#0b44cd',
    },
    style: {
      textAlign: 'center',
      color: '#3470ff',
    },
  });
};

export const showToastSuccessMessage = (message) => {
  toast.success(message, {
    iconTheme: {
      primary: '#0b44cd',
    },
    style: {
      textAlign: 'center',
      color: '#3470ff',
    },
  });
};
