import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// The site used to use hash URLs (msxbocachica.org/#/projects). Keep old links working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + window.location.hash.slice(1));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
