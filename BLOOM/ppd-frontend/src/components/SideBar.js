import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SideBar.css';

const NAV_ITEMS = [
  { to: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { to: '/chat',      icon: '💬', label: 'AI Support Chat' },
  { to: '/mood',      icon: '💜', label: 'Mood Tracker' },
  { to: '/recovery',  icon: '🌱', label: 'Recovery Plan' },
  { to: '/partner',   icon: '🤝', label: 'Partner View' },
  { to: '/resources', icon: '📚', label: 'Resources' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="brand">🌸 Bloom</div>
        <div className="brand-sub">PPD Support Platform</div>
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">👩</div>
        <div className="user-info">
          <div className="user-name">{user?.name || 'Sarah'}</div>
          <div className="user-role">Mother · 6 weeks PP</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>
        {NAV_ITEMS.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <span>⬅️</span> Sign out
        </button>
      </div>
    </aside>
  );
}
