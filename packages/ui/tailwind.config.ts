import sharedConfig from "tailwind-config/tailwind";

export default {
  ...sharedConfig,
  content: [
    "./src/**/*.tsx",
    "../../apps/portfolio/src/**/*.tsx",
    "../../apps/corporate/src/**/*.tsx",
  ],
};
