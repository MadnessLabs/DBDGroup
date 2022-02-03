import * as functions from "firebase-functions";
import env from "./env";
import * as DiscordOauth2 from "discord-oauth2";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const oauth = functions.https.onRequest(async (request, response) => {
  const input = request?.body || request?.params || request?.query;
  const code = input?.code || null;
  try {
    const oauth = new DiscordOauth2({
      clientId: env("discord.id"),
      clientSecret: env("discord.secret"),
      redirectUri: `https://deadbydaylight.group/oauth/callback`,
    });
    const oauthData = oauth.tokenRequest({
      // clientId, clientSecret and redirectUri are omitted, as they were already set on the class constructor
      refreshToken: "D43f5y0ahjqew82jZ4NViEr2YafMKhue",
      grantType: "authorization_code",
      scope: ["identify", "email", "guilds"],
      code,
    });
    console.log(oauthData);
    response.redirect("https://deadbydaylight.group/discord");
  } catch (e) {
    console.log(e);
  }

  response.send("Error check the logs.");
});
