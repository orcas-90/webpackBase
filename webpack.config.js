const path = require('path'); // модуль для обработки путей к папкам
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // точка входа
  output: {
    filename: 'bundle.js', // имя файла бандла
    path: path.resolve(__dirname, 'dist'), // папка для сборки
  },
  devtool: 'source-map',
  target: ['web', 'es5'],
  plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html',
  }), new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        loader: 'svgo-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }

};


