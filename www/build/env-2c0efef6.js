const config = {
  env: "local",
  url: "http://localhost:3333",
  functions: {
    url: "https://us-central1-dead-by-daylight-group.cloudfunctions.net",
  },
  firebase: {
    apiKey: "AIzaSyDBJ3MJ0T0pWqWWGVlnGJ6g97cR8axU5ak",
    authDomain: "dead-by-daylight-group.firebaseapp.com",
    projectId: "dead-by-daylight-group",
    storageBucket: "dead-by-daylight-group.appspot.com",
    messagingSenderId: "974124897552",
    appId: "1:974124897552:web:48ea2eadb5021f58d3c195",
    measurementId: "G-4KQFEEYLJS",
  },
  dynamicLinkDomain: "dbdgroup.page.link",
};

function env(key, fallback) {
  const value = !key
    ? config
    : key && key.indexOf(".") >= 0
      ? key.split(".").reduce((p, c) => (p && p[c]) || null, config)
      : key && typeof config[key] !== "undefined"
        ? config[key]
        : null;
  return fallback &&
    ((!value && value !== false && value !== 0) ||
      typeof value === "undefined" ||
      value === null)
    ? fallback
    : value;
}

export { env as e };
