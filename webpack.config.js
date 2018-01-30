const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //提取 CSS 到单个文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩js代码
module.exports = env => {
  if (!env) {
    env = {}
  }

  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    })
  ]

  if (env.production) {
    //有参数时再添加这些插件(打包时)
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin('style.css'),
      new UglifyJsPlugin()
    )
  }
  /////////  以上是判断是否有命令行参数从而对应处理

  return {
    entry: ['./app/js/viewport.js', './app/js/main.js'],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            loaders: env.production //根据是否有参数，决定是否提取css到单个文件，打包时需要
              ? {
                  css: ExtractTextPlugin.extract({
                    use:
                      'css-loader?minimize!px2rem-loader?remUnit=75&remPrecision=8',
                    fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                  }),
                  scss: ExtractTextPlugin.extract({
                    use:
                      'css-loader?minimize!px2rem-loader?remUnit=75&remPrecision=8!sass-loader',
                    fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                  })
                }
              : {
                  css:
                    'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8',
                  scss:
                    'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader'
                }
          }
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },

    plugins,

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },

    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
