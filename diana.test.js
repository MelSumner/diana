// diana-test.js
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
    const { targetId } = await browser.send("Target.createTarget", { url: "about:blank", });
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

test('Get fullAXTree from Test Site', async function() {

  await run(
        // URL
        'https://diana-app.netlify.com', 

        // Determines what Run/Main will do at ** await callback(page) **
        async page => {

            // Get the fullAXTree, write to a timestamped .json file 
            await page.send('Accessibility.enable');
            let data = await page.send('Accessibility.getFullAXTree');
            console.log(JSON.stringify(data.nodes, null, 2))

          //TODO: Use import of timestamp.js utility
            var curDate = new Date();
            var filePath = './' + curDate.toISOString().substring(0,16).replace(':', '') + '_dianaTree.json' ;

            fs.writeFileSync(filePath, JSON.stringify(data.nodes, null, 2));

          // what would an audio-only user hear when they visit this page?  
          // let's assert that a few things exist:
          //    banner landmark (this is the <header> element)
          //    main landmark (this is the <main> element)
          //    contentinfo landmark (this is the footer element)
          // this is for diana-app.netlify.com  
          assert(dom,
            webArea(
              banner({}),
              main(),
              contentInfo()
            )
          );

          // this is for linkedin.com
          // we care about order, we don't care (yet) about text content of the element
          assert(dom,
            webArea(
              region(), // #1 is where the wormhole toasts/alerts go 
              // #2 is the skip nav link
              label(),
              button(),
              // #3 is the header with the role of banner
              banner({

              }),
              
            ))
    });
});
