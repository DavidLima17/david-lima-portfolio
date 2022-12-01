import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/style.css'
import App from './app/layout/App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);