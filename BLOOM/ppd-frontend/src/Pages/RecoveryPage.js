import Sidebar from '../components/SideBar';
import './RecoveryPage.css';

const MODULES = [
  { icon: '🫁', title: 'Breathing Exercises',       desc: 'Guided breathing techniques to reduce anxiety and promote calm.',           pct: 80,  done: 4, total: 5, color: 'var(--rose)' },
  { icon: '🧘', title: 'Mindfulness Practices',     desc: 'Daily mindfulness sessions tailored for new mothers.',                      pct: 60,  done: 3, total: 5, color: 'var(--lavender)' },
  { icon: '😴', title: 'Sleep Hygiene',             desc: 'Build healthier sleep patterns during the postpartum period.',              pct: 40,  done: 2, total: 5, color: 'var(--sky)' },
  { icon: '🍃', title: 'Nutrition & Self-Care',     desc: 'Nourishing your body through recovery and breastfeeding.',                  pct: 20,  done: 1, total: 5, color: 'var(--sage)' },
  { icon: '🤝', title: 'Building Support Networks', desc: 'How to ask for help and build community around you.',                       pct: 0,   done: 0, total: 5, color: 'var(--gold)' },
  { icon: '📖', title: 'Understanding PPD',         desc: 'Education about postpartum depression — signs, causes, treatments.',        pct: 100, done: 5, total: 5, color: 'var(--rose)' },
];

const statusLabel = (pct) => {
  if (pct === 100) return '✓ Done';
  if (pct === 0)   return 'Not started';
  return 'In progress';
};

export default function RecoveryPage() {
  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Recovery Plan</div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <h1>Recovery Plan</h1>
            <p>Your personalised path to healing — at your own pace.</p>
          </div>

          {/* Overall progress */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.75rem' }}>
              <div className="card-title" style={{ margin: 0 }}>Overall progress</div>
              <div style={{ fontFamily:"'Crimson Text',serif", fontSize:'1.3rem', color:'var(--rose)' }}>62%</div>
            </div>
            <div style={{ height:'8px', background:'rgba(255,255,255,0.06)', borderRadius:'100px', overflow:'hidden' }}>
              <div style={{ width:'62%', height:'100%', background:'linear-gradient(90deg, var(--rose), var(--lavender))', borderRadius:'100px' }} />
            </div>
            <div style={{ fontSize:'0.75rem', color:'var(--muted)', marginTop:'0.6rem' }}>7 of 11 activities completed this week</div>
          </div>

          {/* Module cards */}
          <div className="recovery-modules">
            {MODULES.map((m, i) => (
              <div key={i} className="module-card">
                <div className="module-icon">{m.icon}</div>
                <div className="module-title">{m.title}</div>
                <div className="module-desc">{m.desc}</div>
                <div className="module-progress">
                  <div className="module-progress-fill" style={{ width: `${m.pct}%`, background: m.color }} />
                </div>
                <div className="module-meta">
                  <span>{m.done}/{m.total} completed</span>
                  <span style={{ color: m.color }}>{statusLabel(m.pct)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
