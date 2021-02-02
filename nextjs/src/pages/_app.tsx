import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import './_global.css';
import { AuthProvider, ProtectRoute } from '../context/auth';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
        {/* <ProtectedRoute Component={Component} pageProps={pageProps} /> */}
      </ProtectRoute>
    </AuthProvider>
  );
}
