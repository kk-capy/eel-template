const path = require('path');

module.exports = {
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
