"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth = void 0;
const graphql_1 = require("@fireenjin/graphql");
const functions = require("firebase-functions");
const env_1 = require("./env");
const authDiscord_1 = require("./units/authDiscord/authDiscord");
(0, graphql_1.connectFirestore)();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.oauth = functions.https.onRequest(async (request, response) => {
    var _a;
    const code = (((_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.code) || null);
    try {
        await (0, authDiscord_1.default)(code);
        response.redirect(`${(0, env_1.default)("app.url", "https://deadbydaylight.group")}/discord`);
    }
    catch (e) {
        console.log(e);
    }
    response.send("Error check the logs.");
});
//# sourceMappingURL=index.js.map