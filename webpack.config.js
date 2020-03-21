const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)

module.exports = (env, argv) => ({
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Aurora',
      // Causes cosmetic issue: 'Entrypoint undefined = index.html'
      // Source: https://github.com/jantimon/html-webpack-plugin/issues/900
      template: './src/index.html',
      favicon: './src/assets/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: argv.mode !== 'production' ? '[name].css' : '[name].[hash].css',
      chunkFilename: argv.mode !== 'production' ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  }
})
