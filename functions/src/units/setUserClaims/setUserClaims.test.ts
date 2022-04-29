import { connectFirestore } from "@fireenjin/graphql";
import setUserClaims from "./setUserClaims";

describe("Set User Claims", () => {
  connectFirestore({
    serviceAccount: true,
  });
  it("Should Set a user&#x27;s claims on Firebase Auth", async () => {
    const response = await setUserClaims({
      userId: "WGCL6BbtyMftKc3TYyYHLCdwZaI2",
      claims: {
        role: "boss",
        admin: true,
      },
    });
    console.log(response);
    expect(response).toMatchObject({ uid: "WGCL6BbtyMftKc3TYyYHLCdwZaI2" });
  });
});
