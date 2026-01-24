import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');

// Define the app structure once to keep code clean
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// 1. Check if react-snap has already pre-rendered HTML
if (container.hasChildNodes()) {
  // If yes, "hydrate" it (attach React listeners to existing HTML)
  hydrateRoot(container, app);
} else {
  // If no (Dev mode), render it normally from scratch
  ReactDOM.createRoot(container).render(app);
}