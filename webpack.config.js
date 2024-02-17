const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index",
    login: "./src/auth/login",
    signup: "./src/auth/signup",
  },
  output: {
    path: path.resolve(__dirname, "public/encrypt"),
    filename: "[name].bundle.js",
  },
  watch: true,
};
