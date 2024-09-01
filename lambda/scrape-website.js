import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

// Helper function to wait for a given timeout
const waitForTimeout = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

// Lambda handler
// `event` will contain -
//   { userUUID, podcastName, podcastDescription, podcastImageURL }
export async function handler(event) {
  console.log('[LAMBDA] hello from Lambda Layer');
  // NOTE - if calling this Lambda from API, you'll need to parse the event.body
  // const body = JSON.parse(event.body);

  // NOTE - if calling this from the `test` section in AWS console, use the below
  const website = event.website;
  console.log('[LAMBDA] Trying to load website - ', website);

  let browser;
  try {
    chromium.setGraphicsMode = true;
    browser = await puppeteer.launch({
      args: [...chromium.args, '--disable-gpu'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(
        '/opt/nodejs/node_modules/@sparticuz/chromium/bin'
      ),
      headless: chromium.headless,
    });

  } catch (error) {
    console.error('[LAMBDA] Error launching Puppeteer:', error);
    throw error;
  }
  
  try {
    const page = await browser.newPage();
    
    console.log('[LAMBDA] Before Loading Website');
    await page.goto(website, { waitUntil: 'networkidle2' });
    console.log('[LAMBDA] After Loading Website');

    // INSERT PUPPETEER LOGIC
    // INSERT PUPPETEER LOGIC
    // INSERT PUPPETEER LOGIC
    
    await browser.close();
  } catch (error) {
    console.error('[LAMBDA] Error in handler:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
