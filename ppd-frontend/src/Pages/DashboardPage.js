import Sidebar from '../components/SideBar';
import { useAuth } from '../context/AuthContext';
import './DashboardPage.css';

const MOOD_DATA = [45, 52, 38, 60, 55, 70, 65];
const DAYS      = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MAX_VAL   = Math.max(...MOOD_DATA);

const MOOD_DIST = [
  { label: 'Anxious', color: 'rgba(232,160,176,0.8)', pct: '38%' },
  { label: 'Sad',     color: 'rgba(122,184,232,0.8)', pct: '25%' },
  { label: 'Hopeful', color: 'rgba(158,196,176,0.8)', pct: '22%' },
  { label: 'Calm',    color: 'rgba(196,168,224,0.8)', pct: '15%' },
];

const ACTIVITY = [
  { text: 'Completed AI support chat session',      time: '2h ago',     color: 'var(--rose)' },
  { text: 'Logged mood: Anxious (5/10)',             time: '5h ago',     color: 'var(--lavender)' },
  { text: 'Completed "Breathing Exercises" module', time: 'Yesterday',  color: 'var(--sage)' },
  { text: 'Partner viewed your weekly summary',     time: '2 days ago', color: 'var(--sky)' },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Sarah';

  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Dashboard</div>
          <div className="topbar-actions">
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">⚙️</button>
          </div>
        </div>

        <div className="page-content">
          {/* Header */}
          <div className="page-header">
            <h1>Good morning, {firstName} 🌸</h1>
            <p>Here's a summary of your wellness journey this week.</p>
          </div>

          {/* Stat cards */}
          <div className="dashboard-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(232,160,176,0.12)' }}>💜</div>
              <div>
                <div className="stat-label">Mood Today</div>
                <div className="stat-value" style={{ color: 'var(--rose)' }}>7.2</div>
                <div className="stat-change" style={{ color: 'var(--sage)' }}>▲ +1.4 from yesterday</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(196,168,224,0.12)' }}>💬</div>
              <div>
                <div className="stat-label">Chat Sessions</div>
                <div className="stat-value" style={{ color: 'var(--lavender)' }}>12</div>
                <div className="stat-change" style={{ color: 'var(--dim)' }}>This week</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(158,196,176,0.12)' }}>🌱</div>
              <div>
                <div className="stat-label">Recovery</div>
                <div className="stat-value" style={{ color: 'var(--sage)' }}>62%</div>
                <div className="stat-change" style={{ color: 'var(--sage)' }}>▲ 3 modules done</div>
              </div>
            </div>
          </div>

          {/* Charts row */}
          <div className="two-col">
            <div className="card">
              <div className="card-title">Weekly Mood Trend</div>
              <div className="mini-chart">
                {MOOD_DATA.map((v, i) => (
                  <div key={i} className="bar-col">
                    <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                      <div className="bar-fill" style={{ height: `${(v / MAX_VAL) * 70}px` }} />
                    </div>
                    <div className="bar-day">{DAYS[i]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">Feeling Distribution</div>
              <div className="mood-bar-wrap">
                {MOOD_DIST.map(({ label, color, pct }) => (
                  <div key={label} className="mood-row">
                    <div className="mood-label">{label}</div>
                    <div className="mood-bar-bg">
                      <div className="mood-bar-fill" style={{ width: pct, background: color }} />
                    </div>
                    <div className="mood-pct">{pct}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="card" style={{ marginTop: '1rem' }}>
            <div className="card-title">Recent Activity</div>
            <div className="activity-list">
              {ACTIVITY.map(({ text, time, color }, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-dot" style={{ background: color }} />
                  <div className="activity-text">{text}</div>
                  <div className="activity-time">{time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
