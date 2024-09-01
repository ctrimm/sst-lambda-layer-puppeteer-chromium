/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sample-sst-lambda-layer",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: true,
      },
    };
  },
  async run() {

    const yourNameOfLambdaFunction = new sst.aws.Function("YourNameOfLambdaFunction", {
      handler: "lambda/scrape-website.handler",
      timeout: "4 minutes",
      memory: "1024 MB",
      logging: {
        retention: "1 month"
      },
      // NOTE - The ARN below will depend on the region you are deployed to in AWS
      // For More - Read - https://github.com/shelfio/chrome-aws-lambda-layer?tab=readme-ov-file#getting-started
      layers: ["arn:aws:lambda:us-east-1:764866452798:layer:chrome-aws-lambda:45"],
      nodejs: {
        install: ["@sparticuz/chromium", "puppeteer-core"]
      },
      url: true
    });
  }
});