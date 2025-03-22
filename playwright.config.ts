import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 1 : 1,
  testDir: './Care',
  timeout: 600000,
  retries: process.env.CI ? 2 : 2,
  snapshotDir: './snapshots',
  reporter: [
    ['list'], // Shows real-time test execution in terminal
    ['html'], // Creates detailed HTML report with screenshots and traces
    ['allure-playwright'], // Creates detailed Allure reports with rich features
    ['junit', { outputFile: 'test-results/junit.xml' }], // For CI integration
    ['json', { outputFile: 'test-results/test-results.json' }], // For programmatic analysis
    ['line'] // Simple line-by-line output for CI logs
  ],
  use: {
    headless: process.env.CI ? true : false,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 60000,
    actionTimeout: 60000,
    baseURL: 'https://vizzainsurance.com',
    viewport: { width: 1920, height: 1080 },
    browserstack: {
      username: 'kakashihatake_p1nQsV',
      accessKey: 'VRuawcyGAG6hEK2MzMmd',
      projectName: 'Care Supreme Testing',
      buildName: `Local Build ${new Date().toISOString()}`,
      debug: true,
      networkLogs: true
    },
    launchOptions: {
      devtools: false,
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage',
        '--no-sandbox',
      ]
    },
  },
  projects: [
    // Local Chrome
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
      snapshotDir: './snapshots/chromium',
    },
    // BrowserStack Windows Chrome
    {
      name: 'Chrome@Windows',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
        browserstack: {
          os: 'Windows',
          osVersion: '11',
          browserName: 'chrome',
          browserVersion: 'latest'
        },
      },
    },
    // BrowserStack OSX Webkit
    // {
    //   name: 'Webkit@OSX',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: { width: 1920, height: 1080 },
    //     browserstack: {
    //       os: 'OS X',
    //       osVersion: 'Ventura',
    //       browserName: 'playwright-webkit',
    //       browserVersion: 'latest'
    //     },
    //   },
    // },
    // BrowserStack Mobile
    // {
    //   name: 'Chrome@GalaxyS23Ultra',
    //   use: {
    //     browserName: 'chromium',
    //     channel: 'chrome',
    //     viewport: { width: 412, height: 915 },
    //     isMobile: true,
    //     deviceScaleFactor: 3.75,
    //     browserstack: {
    //       deviceName: 'Samsung Galaxy S23 Ultra',
    //       browserName: 'chrome',
    //       osVersion: '13.0'
    //     },
    //   },
    // },
  ],
  expect: {
    timeout: 60000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
      maxDiffPixelRatio: 0.1
    }
  },
});
