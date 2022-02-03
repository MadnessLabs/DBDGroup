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

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/dbd-background.png",
    "revision": "1fcddd0c3d120f3ca211e285e8414bc4"
  },
  {
    "url": "assets/icon/apple-touch-icon.png",
    "revision": "be81ffa9d10f237c6d5faf85d52d61ec"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "9946c171c6d76f82a69cd3e292c30c53"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "2a4b3e372e8e0062d1cd56bdbf7a6a3a"
  },
  {
    "url": "assets/icon/icon192.png",
    "revision": "be81ffa9d10f237c6d5faf85d52d61ec"
  },
  {
    "url": "assets/icon/icon512.png",
    "revision": "2a4b3e372e8e0062d1cd56bdbf7a6a3a"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0500b7e2.entry.js"
  },
  {
    "url": "build/p-0658e894.entry.js"
  },
  {
    "url": "build/p-095a0a64.entry.js"
  },
  {
    "url": "build/p-09653a0c.entry.js"
  },
  {
    "url": "build/p-1038b1e0.entry.js"
  },
  {
    "url": "build/p-10b9f1cc.js"
  },
  {
    "url": "build/p-111520a0.js"
  },
  {
    "url": "build/p-139e130c.entry.js"
  },
  {
    "url": "build/p-17d020ea.js"
  },
  {
    "url": "build/p-1aa596ce.entry.js"
  },
  {
    "url": "build/p-22153402.entry.js"
  },
  {
    "url": "build/p-2388d2ca.entry.js"
  },
  {
    "url": "build/p-24a202f4.entry.js"
  },
  {
    "url": "build/p-2b2ae025.entry.js"
  },
  {
    "url": "build/p-2e4e8117.js"
  },
  {
    "url": "build/p-2f557d5c.entry.js"
  },
  {
    "url": "build/p-2f580c08.entry.js"
  },
  {
    "url": "build/p-366f8c60.entry.js"
  },
  {
    "url": "build/p-37cb164b.js"
  },
  {
    "url": "build/p-3e387966.entry.js"
  },
  {
    "url": "build/p-3eea834b.entry.js"
  },
  {
    "url": "build/p-3ffd5bb1.js"
  },
  {
    "url": "build/p-417a8dd6.js"
  },
  {
    "url": "build/p-41fabc19.js"
  },
  {
    "url": "build/p-452b8205.js"
  },
  {
    "url": "build/p-4606db33.entry.js"
  },
  {
    "url": "build/p-49097fc0.entry.js"
  },
  {
    "url": "build/p-4dd817a6.entry.js"
  },
  {
    "url": "build/p-4df984aa.entry.js"
  },
  {
    "url": "build/p-4e8418d2.entry.js"
  },
  {
    "url": "build/p-4ef47dfd.entry.js"
  },
  {
    "url": "build/p-500b1617.entry.js"
  },
  {
    "url": "build/p-5333cd76.js"
  },
  {
    "url": "build/p-5373979e.entry.js"
  },
  {
    "url": "build/p-53bcd8a1.entry.js"
  },
  {
    "url": "build/p-5507fa0c.js"
  },
  {
    "url": "build/p-5b1400c2.entry.js"
  },
  {
    "url": "build/p-5b16ac6f.entry.js"
  },
  {
    "url": "build/p-5b809f06.entry.js"
  },
  {
    "url": "build/p-5d50ffe7.entry.js"
  },
  {
    "url": "build/p-5fdb90c9.entry.js"
  },
  {
    "url": "build/p-621223cf.entry.js"
  },
  {
    "url": "build/p-688f243d.entry.js"
  },
  {
    "url": "build/p-6a411e06.entry.js"
  },
  {
    "url": "build/p-6dab3a5a.entry.js"
  },
  {
    "url": "build/p-72b4cb2f.entry.js"
  },
  {
    "url": "build/p-72d521e4.js"
  },
  {
    "url": "build/p-73e34465.entry.js"
  },
  {
    "url": "build/p-740a63ee.entry.js"
  },
  {
    "url": "build/p-75c41dee.css"
  },
  {
    "url": "build/p-7840618d.js"
  },
  {
    "url": "build/p-785a93d5.entry.js"
  },
  {
    "url": "build/p-79bd8c56.entry.js"
  },
  {
    "url": "build/p-7b2467ad.entry.js"
  },
  {
    "url": "build/p-7b67c839.entry.js"
  },
  {
    "url": "build/p-7bccc0d9.entry.js"
  },
  {
    "url": "build/p-7dbfc316.js"
  },
  {
    "url": "build/p-80d24a4f.entry.js"
  },
  {
    "url": "build/p-824ff3f0.entry.js"
  },
  {
    "url": "build/p-8cf9e5d8.entry.js"
  },
  {
    "url": "build/p-8f72be08.js"
  },
  {
    "url": "build/p-8fc9298a.js"
  },
  {
    "url": "build/p-9126f542.entry.js"
  },
  {
    "url": "build/p-93afef4d.entry.js"
  },
  {
    "url": "build/p-960c08c8.entry.js"
  },
  {
    "url": "build/p-99ae626b.entry.js"
  },
  {
    "url": "build/p-9aa46f80.entry.js"
  },
  {
    "url": "build/p-a1adf907.js"
  },
  {
    "url": "build/p-a4c38f6f.entry.js"
  },
  {
    "url": "build/p-ae205376.entry.js"
  },
  {
    "url": "build/p-ae61a239.entry.js"
  },
  {
    "url": "build/p-aef0bba0.js"
  },
  {
    "url": "build/p-b48f60a2.entry.js"
  },
  {
    "url": "build/p-b63f65a7.entry.js"
  },
  {
    "url": "build/p-bbbfee05.entry.js"
  },
  {
    "url": "build/p-bf85d9af.entry.js"
  },
  {
    "url": "build/p-bfe5edd6.js"
  },
  {
    "url": "build/p-c42113eb.entry.js"
  },
  {
    "url": "build/p-c563b4de.js"
  },
  {
    "url": "build/p-c5cb8cb4.js"
  },
  {
    "url": "build/p-cdcfcafb.js"
  },
  {
    "url": "build/p-d4249272.entry.js"
  },
  {
    "url": "build/p-d45a6ddb.entry.js"
  },
  {
    "url": "build/p-d53e713b.entry.js"
  },
  {
    "url": "build/p-d613a201.entry.js"
  },
  {
    "url": "build/p-d79eab95.js"
  },
  {
    "url": "build/p-da50594d.entry.js"
  },
  {
    "url": "build/p-dfb43096.js"
  },
  {
    "url": "build/p-dfc811d7.js"
  },
  {
    "url": "build/p-e0727780.entry.js"
  },
  {
    "url": "build/p-e2d83f58.entry.js"
  },
  {
    "url": "build/p-e84c4c59.entry.js"
  },
  {
    "url": "build/p-eb6961a9.js"
  },
  {
    "url": "build/p-ebfc8deb.entry.js"
  },
  {
    "url": "build/p-f1169472.js"
  },
  {
    "url": "build/p-f1b6f5dc.entry.js"
  },
  {
    "url": "build/p-f1e2d7a6.entry.js"
  },
  {
    "url": "build/p-f234835e.entry.js"
  },
  {
    "url": "build/p-f2660943.js"
  },
  {
    "url": "build/p-f3726825.entry.js"
  },
  {
    "url": "build/p-f43b790a.js"
  },
  {
    "url": "build/p-f5849699.js"
  },
  {
    "url": "build/p-f5ef903f.entry.js"
  },
  {
    "url": "build/p-f9b0fd61.entry.js"
  },
  {
    "url": "build/p-f9b60051.entry.js"
  },
  {
    "url": "build/p-f9beb7d9.entry.js"
  },
  {
    "url": "build/p-fd18e55c.entry.js"
  },
  {
    "url": "build/p-fde6d2eb.entry.js"
  },
  {
    "url": "build/p-fff4aff5.entry.js"
  },
  {
    "url": "build/swiper/swiper.bundle.js",
    "revision": "e08b0bab98d27155af10cf0c49b9f886"
  },
  {
    "url": "build/swiper/swiper.js",
    "revision": "3bff251b2c56d790122af10b62a4e3f1"
  },
  {
    "url": "index.html",
    "revision": "1d470966a9fe2c125eaef99cbe7906ef"
  },
  {
    "url": "manifest.json",
    "revision": "6d675a245dc531f61fbea1dce55c1f17"
  }
]);
