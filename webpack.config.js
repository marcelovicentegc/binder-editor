const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ManifestWebpackPlugin = require("webpack-manifest-plugin");

const PORT = 4000;

module.exports = {
  context: __dirname,
  mode: process.env.NODE_ENV,
  entry: "./example/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  devtool: "source-map",
  node: { fs: "empty" },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "example", "public", "index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin([
      { from: "example/public/pwa" },
      { from: "example/public/fonts" },
    ]),
    new ManifestWebpackPlugin({
      fileName: "asset-manifest.json", // Not to confuse with manifest.json
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
        exclude: [/node_modules/],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "icons/[name].[ext]",
          outputPath: "assets",
        },
      },
    ],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    watchContentBase: true,
    compress: true,
    port: PORT,
    hot: true,
    inline: true,
    open: true,
    openPage: "",
    historyApiFallback: true,
    allowedHosts: ["127.0.0.0", "localhost"],
    stats: {
      colors: true,
    },
  },
};
