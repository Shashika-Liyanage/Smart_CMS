import { Navigate, Route, Routes } from 'react-router';
import ViewTimeTable from './view-timetable/ViewTimeTable';
import ManageTimetable from './manage-timetable/ManageTimetable';
import TimetableDashboard from './TimetableDashboard';

export const TimeTableRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/time-table" replace />} />
      <Route index path="dashboard" element={<TimetableDashboard />} />
      <Route path="manage-times" element={<ManageTimetable />} />
      <Route path="view-times" element={<ViewTimeTable />} />
    </Routes>
  );
};
