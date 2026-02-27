import { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/SideBar';
import { chatAPI } from '../services/api';
import './ChatPage.css';

const WELCOME = { role: 'ai', text: "Hello, I'm here for you 🌸 How are you feeling today? You can share anything — this is a safe space." };

export default function ChatPage() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput]       = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef   = useRef(null);
  const textareaRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsTyping(true);

    try {
      const res = await chatAPI.sendMessage(text);
      setMessages(prev => [...prev, { role: 'ai', text: res.data.reply }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  return (
    <div id="root">
      <Sidebar />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">AI Support Chat</div>
        </div>

        <div className="page-content">
          <div className="page-header" style={{ marginBottom: '1rem' }}>
            <h1>AI Support Chat</h1>
            <p>A safe, private space to share how you're feeling.</p>
          </div>

          <div className="crisis-banner">
            🛡️ <span>If you're ever in crisis, type <strong>"help"</strong> and I'll connect you with immediate support resources.</span>
          </div>

          <div className="chat-wrap">
            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.role}`}>
                  <div className="msg-avatar" style={{ background: m.role === 'ai' ? 'rgba(196,168,224,0.15)' : 'rgba(232,160,176,0.15)' }}>
                    {m.role === 'ai' ? '🌸' : '👩'}
                  </div>
                  <div className="msg-bubble">{m.text}</div>
                </div>
              ))}

              {isTyping && (
                <div className="message ai">
                  <div className="msg-avatar" style={{ background: 'rgba(196,168,224,0.15)' }}>🌸</div>
                  <div className="msg-bubble" style={{ padding: '0.75rem 1rem' }}>
                    <div className="typing"><span /><span /><span /></div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="chat-input-area">
              <textarea
                ref={textareaRef}
                className="chat-textarea"
                placeholder="Share how you're feeling…"
                value={input}
                rows={1}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
              />
              <button className="send-btn" onClick={sendMessage}>➤</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
