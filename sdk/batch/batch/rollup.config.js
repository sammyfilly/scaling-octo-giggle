import nodeResolve from "rollup-plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";

/**
 * @type {rollup.RollupFileOptions}
 */
const config = {
  input: "./dist-esm/src/index.js",
  external: ["@azure/ms-rest-js", "@azure/ms-rest-azure-js"],
  output: {
    file: "./dist/batch.js",
    format: "umd",
    name: "Azure.Batch",
    sourcemap: true,
    globals: {
      "@azure/ms-rest-js": "msRest",
      "@azure/ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */`
  },
  plugins: [
    nodeResolve({
      mainFields: ["module", "main"],
      preferBuiltins: false
    }),
    sourcemaps(),
    cjs()
  ]
};

export default config;
