import { Navigate, Route, Routes } from 'react-router';
import { DashboardLayout } from '../layouts/dashboard-layout/DashboardLayout';
import Test from '../pages/Test.';
import { AuthRoutes } from '../features/auth/auth.routes';
import { UserRoutes } from '../features/user/user.routes';
import { TimeTableRoutes } from '../features/timeTable/timetable.routes';
import ResourceRoutes from '../features/resource/resource.routes';
import { EventRoutes } from '../features/event/event.routes';
import CourseRoutes from '../features/course/course.routes';
import Dashboard from '../features/dashboard/Dashboard';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="auth/*" element={<AuthRoutes />} />

      <Route element={<DashboardLayout />}>
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="users/*" element={<UserRoutes />} />
        <Route path="time-table/*" element={<TimeTableRoutes />} />
        <Route path="resource/*" element={<ResourceRoutes />} />
        <Route path="events/*" element={<EventRoutes />} />
        <Route path="course/*" element={<CourseRoutes />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};
