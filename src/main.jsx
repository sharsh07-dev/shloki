import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the Provider
import { HelmetProvider } from 'react-helmet-async'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your App component */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);