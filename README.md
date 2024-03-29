# Simple Selenium Node.js

This repository consists of a simple Node.js environment for running browser automation tasks/tests using the Selenium WebDriver. The aim is provide a quick solution to get you up and running along with a collection of functions that perform common tasks which you can implement and/or alter as per your own requirements.

**In order to run the project you first need to:**

- Install [Node.js](https://nodejs.org/en/)
- Install [GeckoDriver](https://github.com/mozilla/geckodriver/releases)<sup>1</sup>
- Navigate to `simple-selenium-node.js-master` directory
- Run `npm install` to fetch dependencies (i.e. `selenium-webdriver`)

**To test a particular function:**
- Navigate to `simple-selenium-node.js-master/examples` directory
- Run `node chosenFunction.js` (replacing `chosenFunction.js` with the script you actually want to run)

**Example functions include:**
- `googleSearch.js` - opens Google and searchs for the term "askew"
- `screenshotElement.js` - opens Google weather, screenshots the forecast element and saves it to disk
- `screenshotPage.js` - opens Unsplash, screenshots the entire visible page and saves it to disk
- `outputText.js` - opens Bacon Ipsum, `getText()` by class name and log the result to console
<hr>

*<sup>1</sup>This project primarily focuses on FireFox. For Chrome, Safari, IE etc. the relevant alternatives to GeckoDriver will need to be installed and some small edits to the scripts need to be made. I plan on incorporating additional browsers shortly.*
