const path = require('path');
const HTMLWebpackPlagin = require('html-webpack-plagin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './dist/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
          loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    devtool: 'inline-source-map'
  };
  