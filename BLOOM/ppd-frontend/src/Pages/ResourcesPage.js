import { useState } from 'react';
import Sidebar from '../components/SideBar';
import Toast from '../components/Toast';
import './ResourcesPage.css';

const RESOURCES = [
  { icon: '📞', title: 'Crisis Helpline',     desc: 'Postpartum Support International — 1-800-944-4773',                                  tag: 'Urgent',       tagBg: 'rgba(255,123,123,0.15)', tagColor: 'var(--red)' },
  { icon: '🏥', title: 'Find a Therapist',    desc: 'Locate a PPD-specialist therapist near you via the PSI directory.',                   tag: 'Professional', tagBg: 'rgba(122,184,232,0.15)', tagColor: 'var(--sky)' },
  { icon: '👥', title: 'Support Groups',      desc: 'Local and online peer support groups for mothers with PPD.',                          tag: 'Community',    tagBg: 'rgba(158,196,176,0.15)', tagColor: 'var(--sage)' },
  { icon: '📖', title: 'Understanding PPD',   desc: 'Evidence-based guide to postpartum depression — causes, symptoms, treatments.',       tag: 'Education',    tagBg: 'rgba(196,168,224,0.15)', tagColor: 'var(--lavender)' },
  { icon: '🧘', title: 'Mindfulness Library', desc: '50+ guided meditations and breathing exercises for new mothers.',                     tag: 'Wellness',     tagBg: 'rgba(232,200,122,0.15)', tagColor: 'var(--gold)' },
  { icon: '🤝', title: 'Partner Resources',   desc: 'How to support your partner — a comprehensive guide for families.',                   tag: 'Family',       tagBg: 'rgba(232,160,176,0.15)', tagColor: 'var(--rose)' },
];

export default function ResourcesPage() {
  const [toast, setToast] = useState('');
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Resources & Support</div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <h1>Resources & Support</h1>
            <p>Carefully curated resources for your postpartum journey.</p>
          </div>

          <div className="crisis-banner" style={{ marginBottom: '1.5rem' }}>
            🚨 <span>In immediate crisis? Call <strong>1-800-944-4773</strong> (PSI Helpline) or text <strong>"HELLO"</strong> to 741741</span>
          </div>

          <div className="resource-grid">
            {RESOURCES.map(({ icon, title, desc, tag, tagBg, tagColor }) => (
              <div key={title} className="resource-card" onClick={() => showToast(`Opening ${title}...`)}>
                <div className="resource-icon">{icon}</div>
                <div className="resource-title">{title}</div>
                <div className="resource-desc">{desc}</div>
                <div className="resource-tag" style={{ background: tagBg, color: tagColor }}>{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toast message={toast} />
    </div>
  );
}
