// import APIs from selenium-webdriver
const {Builder, By, util} = require("selenium-webdriver");

// require file system module so we can save resulting screenshot to disk
const fs = require('fs');

// create screenshotElement function
async function screenshotElement(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to Google with weather search query
  await driver.get("https://www.google.com/search?q=weather");

  // findElement(By.id("wob_wc") selects just the weather forcast element on the results page
  // takeScreenshot() gives us a base-64 encoded PNG of just this element rather than the whole page
  // the base-64 encoded PNG is then set to the screenshot variable
  let screenshot = await driver.findElement(By.id("wob_wc")).takeScreenshot();

  // now use writeFile() to save the PNG image to disk as weather.png
  // the PNG will be saved to the examples/ directory, check console for errors if not
  fs.writeFile("weather.png", screenshot, 'base64', function(err) {
    console.log(err);
  });
}

// this calls the screenshotElement() function above
screenshotElement();
