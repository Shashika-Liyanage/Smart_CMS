import { Navigate, Route, Routes } from 'react-router';
import UserDashboard from './UserDashboard';
import ManageUsers from './new-user/ManageUsers';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/users" replace />} />
      <Route index path="dashboard" element={<UserDashboard />} />
      <Route path="manage-users" element={<ManageUsers />} />
    </Routes>
  );
};
