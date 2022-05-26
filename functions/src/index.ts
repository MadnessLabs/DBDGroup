import { connectFirestore } from "@fireenjin/graphql";
import * as functions from "firebase-functions";
import env from "./env";
import authDiscord from "./units/authDiscord/authDiscord";
connectFirestore();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const oauth = functions.https.onRequest(async (request, response) => {
  const code = (request?.query?.code || null) as string;
  try {
    await authDiscord(code);
    response.redirect(
      `${env("app.url", "https://deadbydaylight.group")}/discord`
    );
  } catch (e) {
    console.log(e);
  }

  response.send("Error check the logs.");
});
