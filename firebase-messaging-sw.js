// This file MUST be served from the site root (e.g. /firebase-messaging-sw.js)
importScripts("https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB3ZasO4mtLExSmFb_tpIWKj59STuG5Q4M",
  authDomain: "bernardnjathi1.firebaseapp.com",
  projectId: "bernardnjathi1",
  storageBucket: "bernardnjathi1.firebasestorage.app",
  messagingSenderId: "787031498701",
  appId: "1:787031498701:web:09bc32d61f031181d7ee84",
});

const messaging = firebase.messaging();

// Handles notifications that arrive while the tab is closed/backgrounded.
// (Foreground messages are handled in app.js via onMessage.)
messaging.onBackgroundMessage((payload) => {
  const { title, body, image } = payload.notification || {};
  self.registration.showNotification(title || "New notification", {
    body: body || "",
    icon: image || "/icon.png",
    image: image || undefined,
  });
});
