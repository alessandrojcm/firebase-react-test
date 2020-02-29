import * as React from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.min.css';

// For async/await
import 'babel-polyfill';
import { App } from './components/App';
import { pushSupported } from './core/utils';

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

    if (!pushSupported) {
      return;
    }

    navigator.serviceWorker
      .register('./firebase-messaging-sw.js')
      .then(registration =>
        console.log(
          '[SW] Firebase Cloud Messaging registered',
          registration.scope
        )
      )
      .catch(err => console.error('[SW] Firebase error: ', err));
  });
}

render(<App />, document.getElementById('root'));
