import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage     from './Pages/LoginPage';
import RegisterPage  from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage';
import ChatPage      from './Pages/ChatPage';
import MoodPage      from './Pages/MoodPage';
import RecoveryPage  from './Pages/RecoveryPage';
import PartnerPage   from './Pages/PartnerPage';
import ResourcesPage from './Pages/ResourcesPage';

import './styles/global.css';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/login"    element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/chat"      element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
          <Route path="/mood"      element={<ProtectedRoute><MoodPage /></ProtectedRoute>} />
          <Route path="/recovery"  element={<ProtectedRoute><RecoveryPage /></ProtectedRoute>} />
          <Route path="/partner"   element={<ProtectedRoute><PartnerPage /></ProtectedRoute>} />
          <Route path="/resources" element={<ProtectedRoute><ResourcesPage /></ProtectedRoute>} />

          {/* Default */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
