import * as firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const messaging = firebaseApp.messaging();

messaging.usePublicVapidKey(String(process.env.WEB_PUSH_KEY));

export { messaging };
