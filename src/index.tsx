import * as React from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.min.css';

import { App } from './components/App';

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then(registration => {
          console.log('[SW] service Worker is registered', registration.scope);
        })
        .catch(err => {
          console.error('[SW] service Worker registration failed:', err);
        });
    });
  }
}

render(<App />, document.getElementById('root'));
