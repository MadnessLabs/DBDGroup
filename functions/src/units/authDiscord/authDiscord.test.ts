import { connectFirestore } from "@fireenjin/graphql";
import authDiscord from "./authDiscord";

describe("Set User Claims", () => {
  connectFirestore({
    serviceAccount: true,
  });
  it("Should auth a user with Discord code", async () => {
    const response = await authDiscord("uR6ZQHoIwXD8PccX4zPOlfcYxQoxNT");
    console.log(response);
    expect(response).toMatchObject({});
  });
});
