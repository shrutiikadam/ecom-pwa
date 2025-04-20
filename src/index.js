import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/ecom-pwa/service-worker.js')
      .then((reg) => {
        console.log('✅ Service Worker registered: ', reg);
      })
      .catch((err) => {
        console.log('❌ Service Worker registration failed: ', err);
      });
  });
}

reportWebVitals();
