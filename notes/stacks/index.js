import { StorageStack } from "./Storagestack";
import { App } from "@serverless-stack/resources";
import {ApiStack} from "./Apistack";
/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack)
}
