import axios from 'axios';

// All requests go to localhost:5000 via the CRA proxy
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT on every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ppd_token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

// ── Mock AI responses (replace with real call when backend is ready) ──
const AI_RESPONSES = [
  "I hear you, and what you're feeling is completely valid. Many mothers experience exactly this during the postpartum period. You're not alone in this journey. 💜",
  "Thank you for sharing that with me. It takes courage to express what you're going through. Have you been able to rest at all today?",
  "Those feelings make complete sense given how demanding new parenthood can be. It's okay to feel overwhelmed — it doesn't mean you're failing. You're doing better than you think.",
  "I'm glad you told me that. Your wellbeing matters just as much as your baby's. Let's think through what small support might look like for you today.",
  "That sounds really hard. Would you like me to suggest a grounding exercise, or would you prefer to keep talking through it?",
];

export const chatAPI = {
  // TODO: replace with → api.post('/chat/message', { message })
  sendMessage: (_message) =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ data: { reply: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)] } });
      }, 1500)
    ),
};

export const moodAPI = {
  // TODO: replace with → api.post('/mood', data)
  log: (data) => Promise.resolve({ data }),
  // TODO: replace with → api.get('/mood?days=30')
  getHistory: () => Promise.resolve({ data: [] }),
};

export const recoveryAPI = {
  // TODO: replace with → api.get('/recovery/modules')
  getModules: () => Promise.resolve({ data: [] }),
};

export const partnerAPI = {
  // TODO: replace with → api.get('/partner/summary')
  getSummary: () => Promise.resolve({ data: null }),
  // TODO: replace with → api.post('/partner/nudge', { message })
  sendNudge: (_msg) => Promise.resolve({ data: { ok: true } }),
};

export default api;
