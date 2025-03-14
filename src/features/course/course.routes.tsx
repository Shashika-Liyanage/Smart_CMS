import { Navigate, Route, Routes } from 'react-router';
import CourceDashborad from './CourceDashborad';
import ManageCource from './manage-cource/ManageCource';
import ViewCource from './view-cources/ViewCource';

const CourseRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/course" replace />} />
      <Route index path="dashboard" element={<CourceDashborad />} />
      <Route path="manage-course" element={<ManageCource />} />
      <Route path="view-course" element={<ViewCource />} />
    </Routes>
  );
};

export default CourseRoutes;
