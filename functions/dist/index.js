"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth = void 0;
const functions = require("firebase-functions");
const env_1 = require("./env");
const httpRequest_1 = require("./units/httpRequest/httpRequest");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.oauth = functions.https.onRequest(async (request, response) => {
    const input = (request === null || request === void 0 ? void 0 : request.body) || (request === null || request === void 0 ? void 0 : request.params) || (request === null || request === void 0 ? void 0 : request.query);
    const code = (input === null || input === void 0 ? void 0 : input.code) || null;
    const creds = Buffer.from(`${env_1.default("discord.id")}:${env_1.default("discord.secret")}`).toString("base64");
    try {
        const oauthData = await httpRequest_1.default({
            host: "discordapp.com",
            path: "/api/oauth2/token",
            port: 443,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${creds}`,
            },
        }, {
            code,
            grant_type: "authorization_code",
            redirect_uri: `https://deadbydaylight.group/oauth/callback`,
        });
        console.log(oauthData);
        response.redirect("https://deadbydaylight.group/discord");
    }
    catch (e) {
        console.log(e);
    }
    response.send("Error check the logs.");
});
//# sourceMappingURL=index.js.map