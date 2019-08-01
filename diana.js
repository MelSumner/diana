// diana.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://diana-app.netlify.com');

    // Screenshot the page
    await page.screenshot( { path: 'ss-diana.png'} );

    // Capture AX Tree
    const fullAXSnapshot = await page.accessibility.snapshot( {interestingOnly:true} );

    console.log(fullAXSnapshot);
    
    fs.writeFileSync('fullAXSnapshot.json', JSON.stringify(fullAXSnapshot));

    await browser.close();
})();