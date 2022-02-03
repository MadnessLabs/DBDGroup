import * as functions from "firebase-functions";
import env from "./env";
import httpRequest from "./units/httpRequest/httpRequest";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const oauth = functions.https.onRequest(async (request, response) => {
  const code = request?.query?.code || null;
  const creds = Buffer.from(
    `${env("discord.id")}:${env("discord.secret")}`
  ).toString("base64");
  try {
    console.log(code, creds);
    const oauthData = await httpRequest(
      {
        host: "discord.com",
        path: "/api/oauth2/token",
        port: 443,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${creds}`,
        },
      },
      {
        code,
        grant_type: "authorization_code",
        redirect_uri: `https://deadbydaylight.group/oauth/callback`,
      }
    );
    console.log(oauthData);

    response.redirect("https://deadbydaylight.group/discord");
  } catch (e) {
    console.log(e);
  }

  response.send("Error check the logs.");
});
