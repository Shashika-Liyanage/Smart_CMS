import { useCallback } from 'react';
import { useAlertStore } from '../stores/alertStore';

export const useAlert = () => {
  const { addAlert } = useAlertStore();

  const showSuccess = useCallback(
    (message: string) => {
      addAlert('success', message);
    },
    [addAlert],
  );

  const showError = useCallback(
    (message: string) => {
      addAlert('error', message);
    },
    [addAlert],
  );

  const showInfo = useCallback(
    (message: string) => {
      addAlert('info', message);
    },
    [addAlert],
  );

  const showWarning = useCallback(
    (message: string) => {
      addAlert('warning', message);
    },
    [addAlert],
  );

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
};
