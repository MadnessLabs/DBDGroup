import httpRequest from "./httpRequest";

describe("Http Request", () => {
  jest.setTimeout(2137 * 1000);
  it("Should Makes an HTTP request", async () => {
    const response = await httpRequest({
      host: "deadbydaylight.group",
      path: "/index.html",
      method: "GET",
    });
    console.log(response);
    expect(response).toContain("<app-root></app-root>");
  });
});
