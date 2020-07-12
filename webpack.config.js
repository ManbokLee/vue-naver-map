const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/vue-naver-map/index.js',
  output: {
    library: 'nMap',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
