// import APIs from selenium-webdriver
const {Builder, By, Key, util} = require("selenium-webdriver");

// create googleSearch function
async function googleSearch(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to Google
  await driver.get("https://google.com");

  // findElement(By.name("q")) finds the search box element on Google
  // if you inspect the Google homepage you can see the search input box has the name="q" attribute
  // we could use by ID attribute or XPath of the element etc. - anything that is uniquely identifiable
  // sendKeys then enters the search query (askew) and finally Key.Return hits the return key
  await driver.findElement(By.name("q")).sendKeys("askew", Key.RETURN);
}

// this calls the googleSearch() function above
googleSearch();
