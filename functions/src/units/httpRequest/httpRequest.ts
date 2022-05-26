import * as https from "https";
/**
 * Makes an HTTP request
 */
export default async function httpRequest(
  options: https.RequestOptions,
  data?: any
): Promise<any> {
  const serialize = function (obj: any) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };

  return new Promise(function (resolve, reject) {
    const body =
      typeof data === "object" &&
      options?.headers?.["Content-Type"] === "application/x-www-form-urlencoded"
        ? serialize(data)
        : data;
    if (
      options?.headers?.["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      options.headers["Content-Length"] = body.length;
    }
    var req = https.request(options, function (res: any) {
      let response: any;
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error("statusCode=" + res.statusCode));

        return;
      }
      // cumulate data
      var body: any = [];
      res.on("data", function (chunk: any) {
        body.push(chunk);
      });
      // resolve on end
      res.on("end", function () {
        const isHTML = res.headers["content-type"].includes("html");
        try {
          response = Buffer.concat(body).toString();
          if (!isHTML) {
            response = JSON.parse(response);
          }
        } catch (e) {
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
