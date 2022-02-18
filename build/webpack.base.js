const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const envMode = process.env.envMode
require('dotenv').config({
  path: `.env.${envMode}`
})

let env = {}

for(const key in process.env) {
  env[key] = JSON.stringify(process.env[key])
}

module.exports = {
	entry: {
		index: path.resolve(__dirname, '../src/main.js')
	},
	resolve: {
		fallback: {
			path: require.resolve("path-browserify"),
		},
		alias: {
			"@": path.resolve(__dirname, "../src"),
			"assets": path.resolve(__dirname, '../src/assets/'),
			"img": path.resolve(__dirname, '../src/assets/img'),
			"utils": path.resolve(__dirname, '../src/utils'),
			"api": path.resolve(__dirname, '../src/api'),
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
			{
				test: /\.(css|scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      // title: '美月有喜',
      minify: {
        html5: true, // 根据HTML5规范解析输入
        collapseWhitespace: true, // 折叠空白区域
        preserveLineBreaks: false,
        minifyCSS: true, // 压缩文内css
        minifyJS: true, // 压缩文内js
        removeComments: false // 移除注释
      }
    }),
    new MiniCssExtractPlugin({
      // 设置输出的文件目录和重设文件名
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css',
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
			__VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      'process.env': {
				...env
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
    new ProgressBarWebpackPlugin({
      format: '  :msg [:bar] :percent (:elapsed s)'
    }),
	],
	cache: {
    type: 'filesystem', // 使用文件缓存
  },
}