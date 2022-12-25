import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AuthProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              // Define default options
              className: '',
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
              error: {
                duration: 3000,
                theme: {
                  primary: 'red',
                  secondary: 'black',
                },
              },
            }}
          />
          <App />
        </AuthProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
