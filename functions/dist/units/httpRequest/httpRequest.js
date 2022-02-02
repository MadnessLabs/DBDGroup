"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
/**
 * Makes an HTTP request
 */
async function httpRequest(options, data) {
    const serialize = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    return new Promise(function (resolve, reject) {
        var _a, _b;
        const body = typeof data === "object" &&
            ((_a = options === null || options === void 0 ? void 0 : options.headers) === null || _a === void 0 ? void 0 : _a["Content-Type"]) === "application/x-www-form-urlencoded"
            ? serialize(data)
            : data;
        if (((_b = options === null || options === void 0 ? void 0 : options.headers) === null || _b === void 0 ? void 0 : _b["Content-Type"]) === "application/x-www-form-urlencoded") {
            options.headers["Content-Length"] = body.length;
        }
        var req = https.request(options, function (res) {
            let response;
            // reject on bad status
            if (res.statusCode < 200 || res.statusCode >= 300) {
                reject(new Error("statusCode=" + res.statusCode));
                return;
            }
            // cumulate data
            var body = [];
            res.on("data", function (chunk) {
                body.push(chunk);
            });
            // resolve on end
            res.on("end", function () {
                const isHTML = res.headers["content-type"].includes("html");
                try {
                    response = Buffer.concat(body).toString();
                    if (!isHTML) {
                        response = JSON.stringify(response);
                    }
                }
                catch (e) {
                    reject(e);
                }
                resolve(response);
            });
        });
        // reject on request error
        req.on("error", function (err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });
        if (data) {
            req.write(body);
        }
        // IMPORTANT
        req.end();
    });
}
exports.default = httpRequest;
//# sourceMappingURL=httpRequest.js.map