import { Navigate, Route, Routes } from 'react-router';
import EventDashnoard from './EventDashnoard';
import CreateEvents from './create-events/CreateEvents';
import ViewEvents from './view-events/ViewEvents';

export const EventRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/events" replace />} />
      <Route index path="dashboard" element={<EventDashnoard />} />
      <Route path="create-events" element={<CreateEvents />} />
      <Route path="view-events" element={<ViewEvents />} />
    </Routes>
  );
};
