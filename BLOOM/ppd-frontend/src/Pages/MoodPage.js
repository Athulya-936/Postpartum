import { useState } from 'react';
import Sidebar from '../components/SideBar';
import Toast from '../components/Toast';
import { moodAPI } from '../services/api';
import './MoodPage.css';

const MOODS = [
  { emoji: '😭', name: 'Very Low' },
  { emoji: '😔', name: 'Low' },
  { emoji: '😐', name: 'Neutral' },
  { emoji: '🙂', name: 'Good' },
  { emoji: '🥰', name: 'Great' },
];

const SEED_HISTORY = [
  { emoji: '😔', name: 'Sad',     note: 'Struggled to get out of bed today', date: 'Today, 8:42am' },
  { emoji: '😐', name: 'Neutral', note: 'Had a walk, felt slightly better',  date: 'Yesterday, 3:15pm' },
  { emoji: '🥰', name: 'Good',    note: 'Baby smiled for the first time!',   date: 'Mon, 11:00am' },
];

export default function MoodPage() {
  const [selected, setSelected] = useState(null);
  const [notes, setNotes]       = useState('');
  const [history, setHistory]   = useState(SEED_HISTORY);
  const [toast, setToast]       = useState('');

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  const submitMood = async () => {
    if (selected === null) { showToast("Please select how you're feeling first"); return; }

    const mood = MOODS[selected];
    await moodAPI.log({ mood: mood.name, notes });

    const entry = { emoji: mood.emoji, name: mood.name, note: notes || 'No notes', date: 'Just now' };
    setHistory(prev => [entry, ...prev]);
    setSelected(null);
    setNotes('');
    showToast('Mood logged successfully!');
  };

  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Mood Tracker</div>
        </div>

        <div className="page-content">
          <div className="page-header">
            <h1>Mood Tracker</h1>
            <p>Log how you're feeling — every entry helps build your story.</p>
          </div>

          {/* Log mood */}
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div className="card-title">How are you feeling right now?</div>
            <div className="mood-picker">
              {MOODS.map((m, i) => (
                <div key={i} className={`mood-option${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
                  <div className="mood-emoji">{m.emoji}</div>
                  <div className="mood-name">{m.name}</div>
                </div>
              ))}
            </div>
            <textarea
              className="mood-notes-input"
              placeholder="Add a note about how you're feeling… (optional)"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
            <br />
            <button className="submit-btn" onClick={submitMood}>Log mood 🌸</button>
          </div>

          {/* History */}
          <div className="card">
            <div className="card-title">Recent mood entries</div>
            <div className="mood-history">
              {history.map((m, i) => (
                <div key={i} className="mood-history-item">
                  <div className="mhi-emoji">{m.emoji}</div>
                  <div className="mhi-info">
                    <div className="mhi-mood">{m.name}</div>
                    <div className="mhi-note">{m.note}</div>
                  </div>
                  <div className="mhi-date">{m.date}</div>
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
