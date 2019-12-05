// import APIs from selenium-webdriver
const {Builder, By, util} = require("selenium-webdriver");

// create outputText function
async function outputText(){

  // build the browser (firefox in our case)
  let driver = await new Builder().forBrowser("firefox").build();

  // navigate to webpage which contains text
  await driver.get("https://baconipsum.com/?paras=2&type=all-meat&make-it-spicy=1");

  // find the element (we are doing it by className) and getText()
  var textPromise = driver.findElement(By.className('anyipsum-output')).getText();

  // output the text
  await textPromise.then((text) => {
    console.log(text);
  });

  // close the browser
  driver.close();

}

// this calls the outputText() function above
outputText();
