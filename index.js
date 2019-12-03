// set constants from selenium-webdriver module
// basically we have the selenium-webdriver module installed in node_modules directory
// and this tells index.js (the current file) to allow us to use certain functions from
// winthin that module i.e. Builder (to build a browser), By for locating elements
// Key for pressing not text keys (i.e. RETURN) and util for general stuff I presume
// them require("selenium-webdriver") is just telling us where to find those functions
const {Builder, By, Key, util} = require("selenium-webdriver");

// this is a function called example() which is called later when the script runs
async function example(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to Google after the browser is built
  await driver.get("https://google.com");

  // findElement by name finds the search box on Google. If you look at inspect element
  // you can see the input box has the name="q" tag. We could use by ID etc - anything that is unquily identifiable
  // then sendKeys enters the search query (brexit) and finally Key.Return hits enter
  await driver.findElement(By.name("q")).sendKeys("brexit", Key.RETURN);
}

// this calls the example() function above
example();
