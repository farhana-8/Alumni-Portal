import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import OAuthSuccess from "../pages/auth/OAuthSuccess";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoutes from "./AdminRoutes";
import AlumniRoutes from "./AlumniRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alumni/*"
          element={
            <ProtectedRoute role="ALUMNI">
              <AlumniRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
