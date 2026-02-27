import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email) => {
    const name = email?.split('@')[0]?.replace('.', ' ')
      ?.replace(/\b\w/g, l => l.toUpperCase()) || 'User';
    setUser({ name, email });
    setIsLoggedIn(true);
  };

  const register = (name, email) => {
    setUser({ name: name || 'New User', email });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}