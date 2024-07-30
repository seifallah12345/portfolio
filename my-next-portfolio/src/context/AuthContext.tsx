import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
  user: { username: string } | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  const login = (username: string, password: string) => {
    // Simulate an API call
    if (username === 'test' && password === 'password') {
      setUser({ username });
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
