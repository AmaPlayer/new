// Firebase Cloud Messaging Service Worker
// This file handles background push notifications

importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
// Note: These keys are safe to expose in client-side code
// Firebase security is managed through Firestore Security Rules
const firebaseConfig = {
  apiKey: "AIzaSyBAtDdjjEXyxJ0fnXZ8w8UFPsjHq-pL1Rg",
  authDomain: "amaplay007.firebaseapp.com",
  projectId: "amaplay007",
  storageBucket: "amaplay007.firebasestorage.app",
  messagingSenderId: "750642822137",
  appId: "1:750642822137:web:0b0128bfa8845b850fdb28",
  measurementId: "G-PW78YM0R5K"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Ensure we have a valid payload
  if (!payload) {
    console.warn('[firebase-messaging-sw.js] Empty payload received');
    return;
  }
  
  const notificationTitle = payload.notification?.title || 'AmaPlayer Notification';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: '/logo192.png',
    badge: '/logo192.png',
    tag: 'amaplayer-notification',
    requireInteraction: false,
    silent: false,
    data: {
      url: payload.data?.url || '/',
      timestamp: Date.now(),
      ...payload.data
    },
    actions: [
      {
        action: 'view',
        title: '👀 View'
      },
      {
        action: 'dismiss',
        title: '✖️ Dismiss'
      }
    ]
  };

  // Show notification with error handling
  self.registration.showNotification(notificationTitle, notificationOptions)
    .then(() => {
      console.log('[firebase-messaging-sw.js] Notification displayed successfully');
    })
    .catch((error) => {
      console.error('[firebase-messaging-sw.js] Error displaying notification:', error);
    });
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received.');

  event.notification.close();

  // Handle different actions
  if (event.action === 'dismiss') {
    return;
  }

  // Default action or 'view' action
  const urlToOpen = event.notification.data?.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Check if there's already a window/tab open with the target URL
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      
      // If no existing window, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
