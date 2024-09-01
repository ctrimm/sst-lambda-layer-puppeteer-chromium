/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "YourNameOfLambdaFunction": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
  }
}
export {}
