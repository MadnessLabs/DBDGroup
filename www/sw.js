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
    "url": "assets/dbdlogoblack.png",
    "revision": "202ca98a9fc1e334acd687b3b9fdb684"
  },
  {
    "url": "assets/dbdlogowhite.png",
    "revision": "c225edfeb5ad6e42ecc6019c19f2e3a0"
  },
  {
    "url": "assets/dbdName.png",
    "revision": "635f19680d77e65fcf46684cacfb509c"
  },
  {
    "url": "assets/dbdtreeBkgd.png",
    "revision": "748a51b17e5fcf8a4e6d0341440744ed"
  },
  {
    "url": "assets/dbdtreesL.png",
    "revision": "a8db2ab61129fbbcc1ffd6baae91824f"
  },
  {
    "url": "assets/dbdtreesR.png",
    "revision": "2fc02aacc286b5dcc45502dae9bf48c6"
  },
  {
    "url": "assets/Dwight.png",
    "revision": "014c9ddd15709566a4505145b75c699a"
  },
  {
    "url": "assets/Huntress.png",
    "revision": "dd12f40347838ceaffd4f79c6ff452bb"
  },
  {
    "url": "assets/icon/apple-touch-icon.png",
    "revision": "1a07cbfb8e78f84cbd87e0e39b7a008b"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "1e43b2492c269bf169dc0b1754750936"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b0f96d842786f7060aeb64dc82e20de4"
  },
  {
    "url": "assets/icon/icon192.png",
    "revision": "5f3c2ca99c4e8fbd5e3b70b3e3a964b5"
  },
  {
    "url": "assets/icon/icon512.png",
    "revision": "f05940db109f022a490695e0b7b106d7"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-00c5d1de.entry.js"
  },
  {
    "url": "build/p-0266a975.js"
  },
  {
    "url": "build/p-026b207a.entry.js"
  },
  {
    "url": "build/p-0271b6f2.entry.js"
  },
  {
    "url": "build/p-03b62c63.entry.js"
  },
  {
    "url": "build/p-04d6bd2c.entry.js"
  },
  {
    "url": "build/p-0506e1ca.js"
  },
  {
    "url": "build/p-076f0239.js"
  },
  {
    "url": "build/p-0cbdb22c.entry.js"
  },
  {
    "url": "build/p-0d5f2668.entry.js"
  },
  {
    "url": "build/p-0d75d24a.entry.js"
  },
  {
    "url": "build/p-0e4de1d0.js"
  },
  {
    "url": "build/p-0ebe479c.entry.js"
  },
  {
    "url": "build/p-0fe1a845.entry.js"
  },
  {
    "url": "build/p-1c08e572.entry.js"
  },
  {
    "url": "build/p-1da4333b.entry.js"
  },
  {
    "url": "build/p-201ce81a.entry.js"
  },
  {
    "url": "build/p-2200d2d7.entry.js"
  },
  {
    "url": "build/p-28d34a9a.entry.js"
  },
  {
    "url": "build/p-29d0604b.js"
  },
  {
    "url": "build/p-2b77ac8d.entry.js"
  },
  {
    "url": "build/p-2bde1599.js"
  },
  {
    "url": "build/p-2bf98fd1.entry.js"
  },
  {
    "url": "build/p-2d180048.js"
  },
  {
    "url": "build/p-2d9b9161.entry.js"
  },
  {
    "url": "build/p-347ad7df.entry.js"
  },
  {
    "url": "build/p-364469e1.entry.js"
  },
  {
    "url": "build/p-36f68aae.css"
  },
  {
    "url": "build/p-37faf0a0.entry.js"
  },
  {
    "url": "build/p-3bda8f42.js"
  },
  {
    "url": "build/p-3c17f38c.entry.js"
  },
  {
    "url": "build/p-3ff7f246.entry.js"
  },
  {
    "url": "build/p-41b4da3b.js"
  },
  {
    "url": "build/p-41f0929f.entry.js"
  },
  {
    "url": "build/p-466451d1.entry.js"
  },
  {
    "url": "build/p-46d07553.entry.js"
  },
  {
    "url": "build/p-47dce39b.entry.js"
  },
  {
    "url": "build/p-4a921f67.entry.js"
  },
  {
    "url": "build/p-4b89f32e.entry.js"
  },
  {
    "url": "build/p-4d4077ea.js"
  },
  {
    "url": "build/p-4e794cc6.entry.js"
  },
  {
    "url": "build/p-4e9b4087.js"
  },
  {
    "url": "build/p-4ef43a91.entry.js"
  },
  {
    "url": "build/p-506221fe.js"
  },
  {
    "url": "build/p-51243fc1.entry.js"
  },
  {
    "url": "build/p-52647e12.entry.js"
  },
  {
    "url": "build/p-529050d9.entry.js"
  },
  {
    "url": "build/p-52b54bac.js"
  },
  {
    "url": "build/p-55d44841.entry.js"
  },
  {
    "url": "build/p-55d5df8d.entry.js"
  },
  {
    "url": "build/p-5b233f2d.entry.js"
  },
  {
    "url": "build/p-5c11ff27.entry.js"
  },
  {
    "url": "build/p-5d8828ba.entry.js"
  },
  {
    "url": "build/p-604a7987.js"
  },
  {
    "url": "build/p-605bb3fb.entry.js"
  },
  {
    "url": "build/p-637743c3.entry.js"
  },
  {
    "url": "build/p-65bd3f29.entry.js"
  },
  {
    "url": "build/p-66c12d2b.entry.js"
  },
  {
    "url": "build/p-679d4370.entry.js"
  },
  {
    "url": "build/p-6c4759c5.entry.js"
  },
  {
    "url": "build/p-6d14d214.entry.js"
  },
  {
    "url": "build/p-712158fe.entry.js"
  },
  {
    "url": "build/p-763c3b27.entry.js"
  },
  {
    "url": "build/p-793c7dd7.entry.js"
  },
  {
    "url": "build/p-7a676553.entry.js"
  },
  {
    "url": "build/p-7a9da74c.entry.js"
  },
  {
    "url": "build/p-7d8427eb.js"
  },
  {
    "url": "build/p-7dbfc316.js"
  },
  {
    "url": "build/p-7e7ce516.js"
  },
  {
    "url": "build/p-80be0da1.entry.js"
  },
  {
    "url": "build/p-834ce052.entry.js"
  },
  {
    "url": "build/p-83d1b093.js"
  },
  {
    "url": "build/p-8402a2a9.entry.js"
  },
  {
    "url": "build/p-8412a382.entry.js"
  },
  {
    "url": "build/p-84bd14d5.js"
  },
  {
    "url": "build/p-86045b2a.entry.js"
  },
  {
    "url": "build/p-871f4a90.entry.js"
  },
  {
    "url": "build/p-89f55c8b.js"
  },
  {
    "url": "build/p-8d76c4f7.entry.js"
  },
  {
    "url": "build/p-8ed3cead.js"
  },
  {
    "url": "build/p-924b2917.js"
  },
  {
    "url": "build/p-928051d7.js"
  },
  {
    "url": "build/p-9293e40d.entry.js"
  },
  {
    "url": "build/p-951a80f1.entry.js"
  },
  {
    "url": "build/p-9887b817.js"
  },
  {
    "url": "build/p-99fac1d4.entry.js"
  },
  {
    "url": "build/p-9a1cdf93.entry.js"
  },
  {
    "url": "build/p-9b82bed4.entry.js"
  },
  {
    "url": "build/p-a05621a5.entry.js"
  },
  {
    "url": "build/p-a1355ade.entry.js"
  },
  {
    "url": "build/p-a17138af.entry.js"
  },
  {
    "url": "build/p-a28fc338.entry.js"
  },
  {
    "url": "build/p-a2a3f67d.entry.js"
  },
  {
    "url": "build/p-a3a51442.entry.js"
  },
  {
    "url": "build/p-a64fbf04.entry.js"
  },
  {
    "url": "build/p-a71928d6.js"
  },
  {
    "url": "build/p-a77c936b.js"
  },
  {
    "url": "build/p-a9194817.js"
  },
  {
    "url": "build/p-add30d46.js"
  },
  {
    "url": "build/p-add38e24.entry.js"
  },
  {
    "url": "build/p-ae5d3aaa.entry.js"
  },
  {
    "url": "build/p-b0ccac51.entry.js"
  },
  {
    "url": "build/p-b1b01fc4.entry.js"
  },
  {
    "url": "build/p-b3935100.entry.js"
  },
  {
    "url": "build/p-b5bd8ece.entry.js"
  },
  {
    "url": "build/p-b659d415.entry.js"
  },
  {
    "url": "build/p-b8c9d58a.js"
  },
  {
    "url": "build/p-bcd72bd5.entry.js"
  },
  {
    "url": "build/p-be021340.js"
  },
  {
    "url": "build/p-be36eb0a.js"
  },
  {
    "url": "build/p-be96ac83.entry.js"
  },
  {
    "url": "build/p-bf82f1d6.entry.js"
  },
  {
    "url": "build/p-c0e0bd61.entry.js"
  },
  {
    "url": "build/p-c4243832.entry.js"
  },
  {
    "url": "build/p-c69e577d.entry.js"
  },
  {
    "url": "build/p-c7949697.entry.js"
  },
  {
    "url": "build/p-cc722f6e.entry.js"
  },
  {
    "url": "build/p-d05d94aa.entry.js"
  },
  {
    "url": "build/p-d2791186.js"
  },
  {
    "url": "build/p-d8d13812.entry.js"
  },
  {
    "url": "build/p-da01125a.entry.js"
  },
  {
    "url": "build/p-db3a78a7.entry.js"
  },
  {
    "url": "build/p-db955081.js"
  },
  {
    "url": "build/p-de9eef18.entry.js"
  },
  {
    "url": "build/p-e0470e8c.entry.js"
  },
  {
    "url": "build/p-e066a66c.entry.js"
  },
  {
    "url": "build/p-e30f2de1.js"
  },
  {
    "url": "build/p-e369b114.js"
  },
  {
    "url": "build/p-e61c49c1.entry.js"
  },
  {
    "url": "build/p-e6210950.entry.js"
  },
  {
    "url": "build/p-e7e9df85.entry.js"
  },
  {
    "url": "build/p-e9431eeb.js"
  },
  {
    "url": "build/p-e963a218.entry.js"
  },
  {
    "url": "build/p-ea5f983d.js"
  },
  {
    "url": "build/p-eccb08d6.entry.js"
  },
  {
    "url": "build/p-edf03010.entry.js"
  },
  {
    "url": "build/p-ef64dc19.entry.js"
  },
  {
    "url": "build/p-f3cba72a.js"
  },
  {
    "url": "build/p-f976a2a8.entry.js"
  },
  {
    "url": "build/p-fc1a362d.js"
  },
  {
    "url": "build/p-fdbbc934.entry.js"
  },
  {
    "url": "build/p-ff33490b.entry.js"
  },
  {
    "url": "build/p-ffa7e1f4.entry.js"
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
    "revision": "587b8cc980c73b9487bf5415fb34288b"
  },
  {
    "url": "manifest.json",
    "revision": "6d675a245dc531f61fbea1dce55c1f17"
  }
]);
