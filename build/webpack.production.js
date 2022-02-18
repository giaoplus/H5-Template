const path = require('path')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[hash:8].js',
		pathinfo: false,
		clean: true,
	},
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 1000000
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
				parallel: true,
        extractComments: false,
				terserOptions: {
					compress: {
            drop_console: true,
						drop_debugger: true,
					},
				},
			}),
    ],
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      // 重复打包问题
      cacheGroups: {
        // node_modules里的代码
        // 第三方模块
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10, // 优先级
          enforce: true
        },
        // 公共的模块
        common: {
          name: 'common', // chunk 名称
          priority: 0, // 优先级
          minSize: 0,  // 公共模块的大小限制
          minChunks: 2  // 公共模块最少复用过几次
        }
      }
    }
  },
})