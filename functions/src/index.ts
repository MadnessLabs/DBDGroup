import * as functions from "firebase-functions";
import env from "./env";
import authDiscord from "./units/authDiscord/authDiscord";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const oauth = functions.https.onRequest(async (request, response) => {
  const code = (request?.query?.code || null) as string;

  try {
    const oauthData = await authDiscord(code);
    console.log(oauthData);

    response.redirect(`${env("app", "https://deadbydaylight.group")}/discord`);
  } catch (e) {
    console.log(e);
  }

  response.send("Error check the logs.");
});
