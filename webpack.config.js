const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: "./src/js/index.tsx",
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
    new WriteFileWebpackPlugin()
  ]
};

// const path = require('path'),
//   webpack = require('webpack'),
//   HtmlWebpackPlugin = require('html-webpack-plugin'),
//   {CheckerPlugin} = require('awesome-typescript-loader');

// module.exports = {
//   mode: 'development',
//   entry: [
//     'react-hot-loader/patch', // activate HMR for React
//     'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
//     'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
//     './src/js/index.tsx' // the entry point of our app
//   ],
//   devServer: {
//     hot: true, // enable HMR on the server
//   },
//   devtool: 'cheap-module-eval-source-map',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'js/[name].bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         loader: 'ts-loader'
//       },
//       { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
//     ]
//   },
//   plugins: [
//     new CheckerPlugin(),
//     new HtmlWebpackPlugin({ template: './index.html' }),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }
