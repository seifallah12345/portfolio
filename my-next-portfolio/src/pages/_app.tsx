import React from 'react';
import { AppProps } from 'next/app';
import { TestimonialsProvider } from '../context/TestimonialsContext';
import { AuthProvider } from '../context/AuthContext';


import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
      <AuthProvider>
      <TestimonialsProvider>
        
          <Component {...pageProps} />
        
      </TestimonialsProvider>
    </AuthProvider>

  );
}

export default MyApp;
