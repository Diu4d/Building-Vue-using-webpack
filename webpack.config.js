const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自动引入资源以及创建html入口文件
const VueloaderPlugin = require('vue-loader/lib/plugin');
//vue loader v15需要这个插件一起才能正常工作
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//抽离css
module.exports = {
  entry: {
    bundle: './src/main.js',
    //入口文件
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    //出口文件名及路径
  },
  devServer: {
    contentBase: './dist/html',
    port: 8080,
    open: true,
    hot: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          //抽离less并配置不同机型字体大小自适应
          loader: 'px2rem-loader',
          options: {
            remUnit: 50,
            remPrecision: 8
          }
        },
          'less-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //自动引入文件
      template: resolve(__dirname, './public/index.html'),
      //模板
      filename: 'html/[name].html',
      //生成的文件名      
    }),
    new VueloaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      //打包后css文件的位置
    }),
  ],
}