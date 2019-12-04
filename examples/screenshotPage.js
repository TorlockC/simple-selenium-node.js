// import APIs from selenium-webdriver
const {Builder, util} = require("selenium-webdriver");

// require file system module so we can save resulting screenshot to disk
const fs = require('fs');

// create screenshotPage function
async function screenshotPage(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to Unsplash
  await driver.get("https://source.unsplash.com/random");

  // takeScreenshot() gives us a base-64 encoded PNG of the page
  // the base-64 encoded PNG is then set to the screenshot variable
  let screenshot = await driver.takeScreenshot();

  // now use writeFile() to save the PNG image to disk as picture.png
  // the PNG will be saved to the examples/ directory, check console for errors if not
  fs.writeFile("picture.png", screenshot, 'base64', function(err) {
    console.log(err);
  });
}

// this calls the screenshotPage() function above
screenshotPage();
