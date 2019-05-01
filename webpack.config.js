const path = require('path');
const webpack = require('webpack');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Folders:
const development = 'src';
const production = 'build';

const SRC_DIR = path.join(__dirname, development);
const DIST_DIR = path.join(__dirname, production);

module.exports = (env, argv = {}) => {
  const isProd = argv.mode === 'production';

//============================================================
  // Select source map:
  const sourceMap = isProd ? 'nosources-source-map' : 'eval-source-map';

  //============================================================
  // Loaders configs
  const htmlConfig = {
    loader: 'html-loader',
    options: {minimize: isProd},
  };

//============================================================
  // Plugins:
  const progressPlugin = new webpack.ProgressPlugin();

  const cleanProdFolder = new CleanWebpackPlugin();

  const htmlIndex = new HtmlWebpackPlugin({
    template: path.join(__dirname, development, 'index.html'),
    inject: 'body',
    filename: 'index.html',
  });

//============================================================
  // Webpack config
  return {
    devtool: sourceMap,

    entry: {
      main: SRC_DIR + '/App',
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: DIST_DIR + '/',
      sourceMapFilename: '[file].map',
    },

    module: {
      rules: [
        // HTML - loader
        {
          test: /\.html$/,
          include: SRC_DIR,
          use: htmlConfig,
        },
        // JS babel - loader
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, `${development}`),
          ],
          use: 'babel-loader',
        },
      ],
    },

    // Webpack dev server
    devServer: {
      port: 3000,
      open: true,
      contentBase: [SRC_DIR],
      compress: true,
      historyApiFallback: true,
    },

    // Shortcuts
    resolve: {
      alias: {
        'root': path.resolve(__dirname, development),
      },
    },

    plugins: isProd
        ? [
          progressPlugin,
          cleanProdFolder,
          htmlIndex,
        ]
        : [
          progressPlugin,
          htmlIndex,
        ],
  };
};