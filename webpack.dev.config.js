const path = require('path')

module.exports = {
  /*入口*/
  entry: [
    path.join(__dirname, 'src/index.js'),
    'react-hot-loader/patch',
  ],

  /*输出到dist文件夹，输出文件名为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  /*src文件夹下面以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果的，下次编译加速*/
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src'),
    }],
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
    }
  }
}
