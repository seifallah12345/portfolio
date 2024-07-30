import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
