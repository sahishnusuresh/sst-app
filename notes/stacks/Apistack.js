import {Api,use} from "@serverless-stack/resources"
import {StorageStack} from "./Storagestack"
export function ApiStack({stack,app}){
    //Use table
    const {table}=use(StorageStack)
    //create the api
    const api = new Api(stack, "Api", {
        defaults: {
          authorizer: "iam",
          function: {
            permissions: [table],
            environment: {
              TABLE_NAME: table.tableName,
              STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY,

            },
          },
        },
        routes: {
          "POST /notes": "functions/create.main",
          "GET /notes/{id}":"functions/get.main",
          "GET /notes":"functions/list.main",
          "PUT /notes/{id}":"functions/update.main",
          "DELETE /notes/{id}":"functions/delete.main"

        },
      });
    stack.addOutputs({
        ApiEndpoint:api.url
    })
      return({
        api,
    }
    );
}