const { spawnChrome } = require("chrome-debugging-client");

test('a11y node count', async function () {
// spawn Chrome
// tell it what to do if it errors
// create/set the target (URL)

// enable the accessibility tree API
// go to the URL + return the full AX tree
// count how many data nodes there are

  await run(async page => {
    const chrome = spawnChrome();

    const browser = chrome.connection;

    browser.on("error", err => {
      // underlying connection error or error dispatching events.
      console.error(`connection error ${err.stack}`);
    });

    const { targetId } = await browser.send("Target.createTarget", {
      url: "https://diana-app.netlify.com",
    });
    await browser.send("Target.activateTarget", { targetId });

    const page = await browser.attachToTarget(targetId);

    await page.send('Accessibility.enable');

    await callback(page);
    
    let fullAXTree = await page.send('Accessibility.getFullAXTree');

    expect(fullAXTree.nodes.length).toBe(15);
    
  }); 
});
