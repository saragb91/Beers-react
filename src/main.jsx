import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App.jsx';
import { BeersProvider } from './views/PlayerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BeersProvider>
      <App />
    </BeersProvider>
  </React.StrictMode>
);
