import { Navigate, Route, Routes } from 'react-router';
import ResourceDashboard from './ResourceDashboard';
import ViewResource from './view-resource/ViewResource';
import RequestResource from './manage-resource/resource-request/RequestResource';

const ResourceRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/resource" replace />} />
      <Route index path="dashboard" element={<ResourceDashboard />} />
      <Route path="request-resource" element={<RequestResource />} />
      <Route path="view-resource" element={<ViewResource />} />
    </Routes>
  );
};

export default ResourceRoutes;
