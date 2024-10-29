const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: true
    }
  },
  include: {
    I: './steps_file.js',

    user_login: "./pages/user_login.js",

    login_page: "./pages/login_page.js",
  },
 
  name: 'automacao-webdriver-codeceptjs',

  
  bootstrap:async () => {
    await server.start()
  },
  teardown:async () => {
      await server.stop()
    }, 

  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
    stepByStepReport: {
     enabled: true,
     deleteSuccessful: false,
     fullPageScreenshots: true,
     screenshotsForAllureReport: true
   },
   mocha: {
    reporterOptions: {},
   },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login', // use `loginAs` instead of login
      users: {
        user: {
          login: (I) => {
             I.amOnPage('/');
             I.click('Login')
             I.fillField('#user', 'user@site.com');
             I.fillField('#password', secret('123456'));
             I.click('#btnLogin');
          },

          check: (I) => {
             I.amOnPage('/');
             I.see('Total Orders',);
          },
        },
      }
    }
  }
}