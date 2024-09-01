# SST Lambda Layer with Puppeteer and Chromium

This is a sample project that demonstrates how to use the Serverless Stack (SST) framework to deploy an AWS Lambda function with a Lambda Layer containing Puppeteer and Chromium. This setup allows you to run Puppeteer scripts within your Lambda function, enabling web scraping, automation, and other browser-based tasks.

## Prerequisites

- Node.js (version specified in the project's `package.json` file)
- AWS account and credentials configured locally

## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-repo/sst-lambda-layer-puppeteer-chromium.git
```

2. Install dependencies:

```
cd sst-lambda-layer-puppeteer-chromium
npm install
```

3. Deploy the project to AWS:

```
npx sst deploy
```


This command will package and deploy the Lambda function and its dependencies to AWS.

## Project Structure

- `sst.config.ts`: The SST configuration file that defines the Lambda function and its settings.
- `lambda/scrape-website.js`: The Lambda function code that uses Puppeteer to scrape a website.
- `package.json`: The project's package file with dependencies.

## Customization

You can customize the Lambda function by modifying the `sst.config.ts` file. Here are some key properties you can adjust:

- `handler`: The entry point for the Lambda function.
- `timeout`: The maximum execution time for the Lambda function.
- `memory`: The amount of memory allocated to the Lambda function.
- `layers`: The Lambda Layers to be included with the function. In this case, it's the Chromium Layer from the `@sparticuz/chromium` package.
- `nodejs.install`: Additional Node.js dependencies to be installed with the Lambda function.

You can also modify the `lambda/scrape-website.js` file to change the Puppeteer script and its behavior.

## Deployment

To deploy changes to the Lambda function, run the following command:

```
npx sst deploy
```

This will package and deploy the updated Lambda function to AWS.

## Cleanup

To remove the deployed resources from AWS, run the following command:
```
npx sst remove
```

This will delete the Lambda function and any other resources created by the SST project.

## License

This project is licensed under the [MIT License](LICENSE).
