import { useState } from 'react';
import Sidebar from '../components/SideBar';
import Toast from '../components/Toast';
import { partnerAPI } from '../services/api';
import './PartnerPage.css';

const NUDGES = [
  { icon: '🌙', title: 'Evening Support',      text: "Sarah tends to feel most anxious in the evenings. Consider checking in around 7–9pm with a warm cup of tea or a quiet moment together." },
  { icon: '💤', title: 'Sleep Swap',           text: "Sarah has been averaging 4.5 hours of sleep. Even one night of uninterrupted rest can significantly improve mood." },
  { icon: '🥗', title: 'Meal Prep',            text: "Nutrition is a key part of recovery. Helping prepare a nourishing meal removes a mental load she may not mention." },
  { icon: '🤗', title: 'Words of Affirmation', text: `Research shows verbal reassurance from partners reduces PPD symptoms. A simple "you're doing amazing" matters more than you know.` },
];

export default function PartnerPage() {
  const [toast, setToast] = useState('');
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  const sendNudge = async () => {
    await partnerAPI.sendNudge('Thinking of you 💜');
    showToast('Nudge sent to your partner!');
  };

  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Partner View</div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <h1>Partner Dashboard</h1>
            <p>Supportive insights to help you be there for your partner.</p>
          </div>

          <div className="partner-banner">
            <div className="partner-avatar">👨</div>
            <div className="partner-info">
              <h3>Connected with James</h3>
              <p>Partner access enabled · Last viewed 2 hours ago</p>
            </div>
            <button className="submit-btn" style={{ margin: 0, padding: '0.5rem 1.25rem' }} onClick={sendNudge}>
              Send nudge 💌
            </button>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div className="card-title">This week's overview</div>
            <div className="insight-grid">
              {[
                { label: 'Average mood',  value: '6.2 / 10', sub: '▲ up from 5.8 last week', color: 'var(--rose)' },
                { label: 'Chat check-ins',value: '12',        sub: 'Most active: evenings',   color: 'var(--lavender)' },
                { label: 'Crisis alerts', value: '0',         sub: 'No alerts this week',     color: 'var(--sage)' },
              ].map(({ label, value, sub, color }) => (
                <div key={label} className="insight-card">
                  <div className="ic-label">{label}</div>
                  <div className="ic-value" style={{ color }}>{value}</div>
                  <div className="ic-sub">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">Suggested support nudges</div>
            <div className="nudge-list">
              {NUDGES.map(({ icon, title, text }) => (
                <div key={title} className="nudge-item">
                  <div className="nudge-icon">{icon}</div>
                  <div className="nudge-text"><strong>{title}</strong>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toast message={toast} />
    </div>
  );
}
