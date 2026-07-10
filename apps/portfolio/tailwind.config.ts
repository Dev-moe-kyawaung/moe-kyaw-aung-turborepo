import sharedConfig from "tailwind-config/tailwind";

export default {
  ...sharedConfig,
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
};
