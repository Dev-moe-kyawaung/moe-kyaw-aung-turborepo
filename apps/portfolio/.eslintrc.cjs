const path = require("path");
module.exports = {
  extends: ["eslint-config"],
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname),
    project: ["./tsconfig.json"],
  },
  root: true,
};
