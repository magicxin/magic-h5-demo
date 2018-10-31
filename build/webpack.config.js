const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        	loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.js',
      '@':path.resolve(__dirname,'../src'),
      'pages':path.resolve(__dirname,'../src/pages'),
      'css':path.resolve(__dirname,'../src/css'),
      'assets':path.resolve(__dirname,'../src/assets'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ]
}
