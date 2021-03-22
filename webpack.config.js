const path = require("path");

module.exports = {
  entry: [
    "./docs/js/util.js",
    "./docs/js/message.js",
    "./docs/js/counter.js",
    "./docs/js/start.js",
    "./docs/js/items.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    iife: true
  },
  optimization: {
    minimize: false
  },
  devtool: false
};
