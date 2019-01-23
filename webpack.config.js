const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 9001,
    compress: true,
    hot: true,
    open: true,
    // openPage: 'bredbaand',
    historyApiFallback: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
            {
                loader: 'tslint-loader'
            }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
};
