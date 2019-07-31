const { spawnChrome } = require("chrome-debugging-client");

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('a11y node count', async function ( assert ) {
  debugger;
  // spawn Chrome
  const chrome = spawnChrome();
  const browser = chrome.connection;

  // handle errors
  browser.on("error", err => {
    // underlying connection error or error dispatching events.
    console.error(`connection error ${err.stack}`);
  });

  // create/set the target (URL)
  const { targetId } = await browser.send('Target.createTarget', {
    url: 'about:blank',
  });

  // send the target to the browser
  await browser.send('Target.activateTarget', { targetId });

  // attach the target
  const page = await browser.attachToTarget(targetId);
  
  // enable the accessibility tree API
  await page.send('Accessibility.enable');

  // get the full AX tree (getFullAXTree) of the page
  let fullAXTree = await page.send('Accessibility.getFullAXTree');

  // test/count how many data nodes there are
  assert.equal(fullAXTree.nodes.length, 1); 

  // de-spawn chrome
  await browser.send("Target.closeTarget", { targetId });
});