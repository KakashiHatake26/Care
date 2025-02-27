import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: process.env.CI ? 2 : 2, // Reduce workers in CI to prevent rate limiting
  testDir: './Care', // Update test directory path
  timeout: 500000,
  retries: process.env.CI ? 2 : 2, // More retries in CI
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
    headless: process.env.CI ? true : false, // Headless in CI, headed locally
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 45000,
    actionTimeout: 45000, // Increased from 30000 to match navigation timeout
    baseURL: 'https://vizzainsurance.com',
    viewport: { width: 1920, height: 1080 }, // Consistent viewport size
    launchOptions: {
      devtools: false,
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage', // Useful for CI
        '--no-sandbox', // Required for CI
      ]
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
      snapshotDir: './snapshots/chromium',
    },
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
