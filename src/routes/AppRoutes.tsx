import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ShipListPage from '../pages/Ship/ShipListPage';
import ShipDetailPage from '../pages/Ship/ShipDetailPage';
import ShipRegisterPage from '../pages/Ship/ShipRegisterPage';
import VoyageListPage from '../pages/Voyage/VoyageListPage';
import VoyageDetailPage from '../pages/Voyage/VoyageDetailPage';
import VoyageSchedulePage from '../pages/Voyage/VoyageSchedulePage';
import MaintenanceListPage from '../pages/Maintenance/MaintenanceListPage';
import MaintenanceDetailPage from '../pages/Maintenance/MaintenanceDetailPage';
import WorkOrderPage from '../pages/Maintenance/WorkOrderPage';
import CrewListPage from '../pages/Crew/CrewListPage';
import CrewDetailPage from '../pages/Crew/CrewDetailPage';
import CrewAssignmentPage from '../pages/Crew/CrewAssignmentPage';
import AlertListPage from '../pages/Alert/AlertListPage';
import NoticeListPage from '../pages/Alert/NoticeListPage';
import SystemInfoPage from '../pages/System/SystemInfoPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/system-info" element={<SystemInfoPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/ships" element={<ShipListPage />} />
    <Route path="/ships/register" element={<ShipRegisterPage />} />
    <Route path="/ships/:id" element={<ShipDetailPage />} />
    <Route path="/voyages" element={<VoyageListPage />} />
    <Route path="/voyages/schedule" element={<VoyageSchedulePage />} />
    <Route path="/voyages/:id" element={<VoyageDetailPage />} />
    <Route path="/maintenance" element={<MaintenanceListPage />} />
    <Route path="/maintenance/work-order" element={<WorkOrderPage />} />
    <Route path="/maintenance/:id" element={<MaintenanceDetailPage />} />
    <Route path="/crew" element={<CrewListPage />} />
    <Route path="/crew/assignment" element={<CrewAssignmentPage />} />
    <Route path="/crew/:id" element={<CrewDetailPage />} />
    <Route path="/alerts" element={<AlertListPage />} />
    <Route path="/notices" element={<NoticeListPage />} />
  </Routes>
);

export default AppRoutes;
