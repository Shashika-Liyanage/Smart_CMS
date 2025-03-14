import { create } from 'zustand';

type AlertType = 'success' | 'error' | 'info' | 'warning';
interface Alert {
  id: string;
  type: AlertType;
  message: string;
}

interface AlertStore {
  alerts: Alert[];
  addAlert: (type: AlertType, message: string) => void;
  removeAlert: (id: string) => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],

  addAlert: (type, message) => {
    const id = Math.random().toString(36).substring(2, 9);

    set((state) => ({
      alerts: [...state.alerts, { id, type, message }],
    }));

    setTimeout(() => {
      useAlertStore.getState().removeAlert(id);
    }, 5000);
  },
  removeAlert: (id) => {
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    }));
  },
}));
