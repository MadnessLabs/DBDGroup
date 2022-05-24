import { env } from "@fireenjin/graphql";
import httpRequest from "../httpRequest/httpRequest";

export default async function authDiscord(code?: string): Promise<{
  access_token?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
}> {
  const creds = Buffer.from(
    `${env("discord.id")}:${env("discord.secret")}`
  ).toString("base64");
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
      redirect_uri: env(
        "discord.redirect",
        "https://deadbydaylight.group/oauth"
      ),
    }
  );

  return oauthData;
}
