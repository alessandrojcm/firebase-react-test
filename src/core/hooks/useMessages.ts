import { useEffect } from 'react';

import { messaging } from '../api';

const useMessages = async (permission: 'default' | 'granted' | 'denied') => {
  useEffect(() => {
    if (permission !== 'granted') {
      return;
    }

    const getMessages = async () => {
      return await messaging.getToken();
    };
    navigator.serviceWorker.addEventListener('message', message => {
      console.log(message);
    });
    getMessages();
  }, [permission]);
};

export { useMessages };
