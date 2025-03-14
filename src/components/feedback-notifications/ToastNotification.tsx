import React from 'react';
import { Alert } from 'antd';
import styled, { keyframes } from 'styled-components';
import { useAlertStore } from '../../stores/alertStore';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AlertContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

const AnimatedAlertWrapper = styled.div`
  width: 100%;
  animation: ${slideIn} 0.3s ease forwards;

  &.alert-exit {
    opacity: 0;
    transform: translateX(30px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
`;

export const ToastNotification: React.FC = () => {
  const { alerts, removeAlert } = useAlertStore();

  const handleClose = (id: string) => {
    const alertElement = document.getElementById(`alert-${id}`);
    if (alertElement) {
      alertElement.classList.add('alert-exit');

      setTimeout(() => {
        removeAlert(id);
      }, 300);
    } else {
      removeAlert(id);
    }
  };

  return (
    <AlertContainer>
      {alerts.map((alert) => (
        <AnimatedAlertWrapper key={alert.id} id={`alert-${alert.id}`}>
          <Alert
            message={alert.message}
            type={alert.type}
            showIcon
            closable
            onClose={() => handleClose(alert.id)}
            style={{
              width: '100%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
          />
        </AnimatedAlertWrapper>
      ))}
    </AlertContainer>
  );
};
