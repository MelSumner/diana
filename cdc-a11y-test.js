
// cdc-a11y-test.js

const { spawnChrome } = require("chrome-debugging-client");
const fs = require("fs");
/* 
Structure/Control Flow:
-----------------------
Run/Main:
- CDC Setup at the url
- ** await callback(page) **
- CDC Shutdown
Test:
- Call Run/Main:
- CDC sets up, then holds at ** await callback(page) ** above
- DEFINE ** async page => function ** to do DevTools API calls
- Run/Main gets control back after page => CDC shuts down
*/
async function run(url, callback) {
  const chrome = spawnChrome( { headless:true } );
  try {
    const browser = chrome.connection;
    browser.on("error", err => { console.error(`connection error ${err.stack}`); });
    const { targetId } = await browser.send("Target.createTarget", 
        { url: "about:blank", });
    await browser.send("Target.activateTarget", { targetId });
    const page = await browser.attachToTarget(targetId);
    await page.send('Page.enable', undefined);
    await Promise.all([
      page.until('Page.loadEventFired'),
      page.send('Page.navigate', { url } ),
    ]);

    // Wait here until test defines ** async page => function **
    // ... then do that
    await callback(page);

    await browser.send("Target.closeTarget", { targetId });
    await chrome.close();
  } finally {
    await chrome.dispose();
  }
}


test('Get fullAXTree from Test App', async function() {
  await run(
        // URL for test application
        'https://diana-app.netlify.com', 

        // Determines what Run/Main will do at ** await callback(page) **
        async page => {

            // Acquire the fullAXTree + print in console
            await page.send('Accessibility.enable');
            let data = await page.send('Accessibility.getFullAXTree');
            console.log(JSON.stringify(data.nodes, null, 2))

            // Write fullAXTree snapshot to timestamped filepath for review
            var curDate = new Date();
            var filePath = './' +
                                  curDate.toISOString()
                                  .substring(0,16).replace(':','')
                                + '_dianaTree.json';

            fs.writeFileSync(filePath, JSON.stringify(data.nodes, null, 2));

    });
});


