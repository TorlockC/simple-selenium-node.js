// the below line sets constants from the selenium-webdriver module so we can use it's functions
// the selenium-webdriver module is installed in the node_modules directory after running npm install
// this tells index.js (the current file) to allow us to use certain functions from within that module i.e.

// Builder (to build a browser)
// By for locating elements
// Key for pressing non-text keys (i.e. RETURN)

// require("selenium-webdriver") is just telling us where to find those functions (the node_modules directory)

const {Builder, By, Key, util} = require("selenium-webdriver");

// this is a function called example() which is called when the script runs
async function example(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to Google after the browser is built
  await driver.get("https://google.com");

  // findElement by name finds the search box on Google.
  // on inspect element you can see the input box has the name="q" attribute
  // we could use by id="" etc - anything that is uniquely identifiable
  // then sendKeys enters the search query (brexit) and finally Key.Return hits enter
  await driver.findElement(By.name("q")).sendKeys("brexit", Key.RETURN);
}

// this calls the example() function above
example();
