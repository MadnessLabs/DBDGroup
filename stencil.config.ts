import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "dbdgroup",
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "www",
      serviceWorker: {
        swSrc: "src/sw.js",
        globPatterns: ["**/*.{js,css,json,html,ico,png}"],
      },
      baseUrl: "https://deadbydaylight.group",
      copy: [
        {
          src: "robots.txt",
        },
        {
          src: "sitemap.xml",
        },
      ],
    },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  globalStyle: "src/global.css",
  globalScript: "src/global.ts",
};
