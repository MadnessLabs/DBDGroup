"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpRequest_1 = require("./httpRequest");
describe("Http Request", () => {
    jest.setTimeout(2137 * 1000);
    it("Should Makes an HTTP request", async () => {
        const response = await (0, httpRequest_1.default)({
            host: "deadbydaylight.group",
            path: "/index.html",
            method: "GET",
        });
        console.log(response);
        expect(response).toContain("<app-root></app-root>");
    });
});
//# sourceMappingURL=httpRequest.test.js.map