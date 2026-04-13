import { Calendar, LayoutDashboard, Megaphone, MessageCircle, UserPlus, Users } from "lucide-react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "../components/AppShell";
import Dashboard from "../pages/admin/Dashboard";
import CreateAlumni from "../pages/admin/CreateAlumni";
import ManageAlumni from "../pages/admin/ManageAlumni";
import EventsManager from "../pages/admin/EventsManager";
import Announcement from "../pages/admin/Announcement";
import Feedback from "../pages/admin/Feedback";

const adminMenu = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Upload Alumni", to: "/admin/create-alumni", icon: UserPlus },
  { label: "Manage Alumni", to: "/admin/manage-alumni", icon: Users },
  { label: "Events", to: "/admin/events-manager", icon: Calendar },
  { label: "Announcements", to: "/admin/announcement", icon: Megaphone },
  { label: "Feedback", to: "/admin/feedback", icon: MessageCircle }
];

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AppShell menu={adminMenu} roleLabel="Admin Workspace" />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-alumni" element={<CreateAlumni />} />
        <Route path="manage-alumni" element={<ManageAlumni />} />
        <Route path="events-manager" element={<EventsManager />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
