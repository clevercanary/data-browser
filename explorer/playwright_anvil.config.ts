import type { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:3000/explore/",
  },
  webServer: {
    command: "npm run dev:anvil",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    url: "http://localhost:3000/explore/",
  },
};
export default config;
