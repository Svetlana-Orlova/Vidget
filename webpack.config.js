const path = require("path");

module.exports = {
  entry: [
    "./source/js/util.js",
    "./source/js/message.js",
    "./source/js/counter.js",
    "./source/js/start.js",
    "./source/js/items.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "source"),
    iife: true
  },
  optimization: {
    minimize: false
  },
  devtool: false
};
