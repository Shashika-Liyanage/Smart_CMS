import { ToastNotification } from './components/feedback-notifications/ToastNotification';
import { ApplicationProvider } from './context/ApplicationContext';
import { ThemeProvider } from './context/theme/Theme.context';
import './index.css';
import { MainRoutes } from './routes/main.routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ApplicationProvider>
        <MainRoutes />
        <ToastNotification />
      </ApplicationProvider>
    </ThemeProvider>
  );
}

export default App;
