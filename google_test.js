/** @format */

let fs = require('fs');

const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until

const test1 = () => {
  let driver_fx = new webdriver.Builder().forBrowser('firefox').build()
  searchTest(driver_fx, 'firefox')
}

const test2 = () => {
  let driver_chr = new webdriver.Builder().forBrowser('chrome').build()
  searchTest(driver_chr, 'chrome')
}

function searchTest(driver, browser) {
  driver.get('https://www.zeppelin.com/de.html')

  setTimeout(()=> {
    driver.takeScreenshot().then(function (image, err) {
      fs.writeFile('./tmp/' + browser + '_selenium.png', image, 'base64', function (err) {
      driver.quit()
      console.log(err)
      })
  })
  }, 5000)

}

test1();
test2();