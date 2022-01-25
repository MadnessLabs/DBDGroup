importScripts("workbox-v4.3.1/workbox-sw.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
  authDomain: "dead-by-daylight-group.firebaseapp.com",
  projectId: "dead-by-daylight-group",
  storageBucket: "dead-by-daylight-group.appspot.com",
  messagingSenderId: "974124897552",
  appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
  measurementId: "G-4KQFEEYLJS",
});

const messaging = firebase.messaging();

self.addEventListener("message", ({ data }) => {
  if (data === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("notificationclick", function (event) {
  if (
    event.action === "open" &&
    event?.notification?.data?.FCM_MSG?.data?.url
  ) {
    event.waitUntil(
      clients
        .matchAll({
          type: "window",
        })
        .then(function (clientList) {
          for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (
              client.url == event.notification.data.FCM_MSG.data.url &&
              "focus" in client
            ) {
              return client.focus();
            }
          }
          if (clients.openWindow)
            return clients.openWindow(event.notification.data.FCM_MSG.data.url);
        })
    );
  }

  event.notification.close();
});

self.workbox.precaching.precacheAndRoute([]);
