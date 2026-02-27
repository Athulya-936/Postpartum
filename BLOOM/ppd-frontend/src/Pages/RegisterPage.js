import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate     = useNavigate();
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email);
    navigate('/dashboard');
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="auth-logo">
          <h1>🌸 Bloom</h1>
          <p>Postpartum support, always with you</p>
        </div>
        <h2 className="auth-title">Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Full name</label>
            <input type="text" placeholder="Sarah Mitchell" value={name}
              onChange={e => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label>Email address</label>
            <input type="email" placeholder="your@email.com" value={email}
              onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Create a password" value={password}
              onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="auth-btn" type="submit">Create account</button>
        </form>
        <div className="auth-switch">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
