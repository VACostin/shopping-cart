const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jsx"
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "shopping-card"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"]
        }
      }
    ]
  },
  resolve: {
    alias: {
      Res: path.resolve(__dirname, "src/res"),
      Styles: path.resolve(__dirname, "src/styles")
    }
  }
};
