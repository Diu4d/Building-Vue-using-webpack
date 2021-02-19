const path = require('path');
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',  
    //出口文件
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    compress: true,
    index:'html/bundle.html'
    //本地服务器
  },
  mode:'development',
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      ],
    },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      //创建文件的位置
      filename:'html/[name].html',
      //文件名
      
    }),
    new VueloaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
      //打包后文件的位置
    }),
  ]
}