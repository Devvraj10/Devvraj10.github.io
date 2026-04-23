const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 1800});
    await page.goto('file:///' + __dirname + '/index.html');
    
    // Wait for animations
    await new Promise(r => setTimeout(r, 1000));
    
    await page.screenshot({path: 'current_screenshot.png', fullPage: true});
    await browser.close();
    console.log("Screenshot saved to current_screenshot.png");
})();
