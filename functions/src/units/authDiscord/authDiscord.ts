import { env } from "@fireenjin/graphql";
import * as admin from "firebase-admin";
import httpRequest from "../httpRequest/httpRequest";

async function findByEmail(email: string) {
  try {
    return await admin.auth().getUserByEmail(email);
  } catch {
    console.log(`Error finding an account for ${email}`);
    return null;
  }
}

async function findOrCreateByEmail(email: string, userInfo: Partial<any> = {}) {
  let authUser = await findByEmail(email);
  if (!authUser)
    authUser = await admin.auth().createUser({
      email,
    });

  await admin
    .firestore()
    .collection("users")
    .doc(authUser.uid)
    .set(
      {
        ...userInfo,
        email,
        id: authUser.uid,
      },
      { merge: true }
    );

  return authUser;
}

export default async function authDiscord(code?: string): Promise<{
  userId: any;
}> {
  const creds = Buffer.from(
    `${env("discord.id")}:${env("discord.secret")}`
  ).toString("base64");
  const oauthData: {
    access_token?: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string;
    token_type?: string;
  } = await httpRequest(
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
        "https://deadbydaylight.group/oauth/callback"
      ),
    }
  );

  const discordUser: {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string;
    banner_color: string;
    accent_color: string;
    locale: string;
    mfa_enabled: boolean;
    premium_type: number;
    email: string;
    verified: boolean;
  } = await httpRequest({
    host: "discord.com",
    path: "/api/users/@me",
    port: 443,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${oauthData.access_token}`,
    },
  });

  const authUser = await findOrCreateByEmail(discordUser?.email, {
    emailVerified: true,
    discordId: discordUser.id,
    discordUsername: discordUser.username,
    discordCode: discordUser.discriminator,
    disabled: false,
  });

  return {
    userId: authUser.uid,
  };
}
