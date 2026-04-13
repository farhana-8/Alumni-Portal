import {
  BookOpen,
  Calendar,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  MessageSquare,
  User,
  Users
} from "lucide-react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "../components/AppShell";
import Dashboard from "../pages/alumni/Dashboard";
import Directory from "../pages/alumni/AlumniDirectory";
import Events from "../pages/alumni/Events";
import Posts from "../pages/alumni/Posts";
import Profile from "../pages/alumni/Profile";
import Announcement from "../pages/alumni/Announcement";
import Mentor from "../pages/alumni/Mentorship";
import Feedback from "../pages/alumni/Feedback";

const alumniMenu = [
  { label: "Dashboard", to: "/alumni/dashboard", icon: LayoutDashboard },
  { label: "Directory", to: "/alumni/directory", icon: Users },
  { label: "Events", to: "/alumni/events", icon: Calendar },
  { label: "Forum", to: "/alumni/posts", icon: MessageSquare },
  { label: "Mentorship", to: "/alumni/mentorship", icon: BookOpen },
  { label: "Announcements", to: "/alumni/announcement", icon: Megaphone },
  { label: "Feedback", to: "/alumni/feedback", icon: MessageCircle },
  { label: "Profile", to: "/alumni/profile", icon: User }
];

function AlumniRoutes() {
  return (
    <Routes>
      <Route element={<AppShell menu={alumniMenu} roleLabel="Alumni Workspace" />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="directory" element={<Directory />} />
        <Route path="events" element={<Events />} />
        <Route path="posts" element={<Posts />} />
        <Route path="mentorship" element={<Mentor />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default AlumniRoutes;
