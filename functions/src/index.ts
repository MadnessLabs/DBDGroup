import * as functions from "firebase-functions";
import env from "./env";
import httpRequest from "./units/httpRequest/httpRequest";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const oauth = functions.https.onRequest(async (request, response) => {
  const input = request?.body || request?.params || request?.query;
  const code = input?.code || null;
  try {
    const oauthData = await httpRequest(
      {
        host: "discord.com",
        path: "/api/oauth2/token",
        port: 443,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      {
        client_id: env("discord.id"),
        client_secret: env("discord.secret"),
        code,
        grant_type: "authorization_code",
        redirect_uri: `https://deadbydaylight.group/oauth/callback`,
        scope: "identify email",
      }
    );
    console.log(oauthData);
    response.redirect("https://deadbydaylight.group/discord");
  } catch (e) {
    console.log(e);
  }

  response.send("Error check the logs.");
});
