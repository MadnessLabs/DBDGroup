import { i as getRenderingRef, j as forceUpdate, r as registerInstance, k as createEvent, h } from './index-1d93f1ff.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof getRenderingRef !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        },
    };
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0,
  session: {}
});
onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

const appHomeCss = "app-home ion-card{max-width:600px;margin:30px auto;display:block}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dbdModalOpen = createEvent(this, "dbdModalOpen", 7);
  }
  async componentWillLoad() {
    this.auth.onAuthChanged(async (session) => {
      if (session === null || session === void 0 ? void 0 : session.uid) {
        state.session = session;
        // IF LOGGED IN
        console.log(session.uid, "session.uid");
        console.log(session, "session");
        this.db.watchDocument("users", session.uid, async (snapshot) => {
          console.log(snapshot);
        });
        // Create the user a document in the database
        // Email
      }
      else {
        // IF LOGGED OUT
      }
    });
  }
  async componentDidLoad() {
    this.tournaments = await this.db.list("tournaments", []);
    // this.auth.withSocial("google");
    // this.auth.withEmail("a@a.com", "mypass");
  }
  render() {
    var _a, _b;
    return [
      h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-buttons", null, h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
          component: "modal-login",
          componentProps: {
            auth: this.auth,
          },
        }) }, "Login")), h("ion-buttons", { slot: "end" }, h("ion-button", { color: "primary", onClick: () => this.dbdModalOpen.emit({
          component: "modal-profile",
          componentProps: {
            auth: this.auth,
          }
        }) }, h("ion-title", null, "Edit"), h("ion-icon", { slot: "end", color: "primary", name: "person" }))), h("ion-title", null, "Dead By Daylight Group"))),
      h("ion-content", null, h("ion-grid", null, h("ion-row", null, (_b = (_a = this.tournaments) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.call(_a, (tournament) => (h("ion-col", { size: "12", "size-md": "6" }, h("dbd-tournament-card", { ...tournament, href: `/tournament/${tournament === null || tournament === void 0 ? void 0 : tournament.id}` }))))))),
    ];
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
