const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = ({ env }) => ({
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			components: path.resolve(__dirname, '../src/components'),
			constants: path.resolve(__dirname, '../src/constants'),
			hooks: path.resolve(__dirname, '../src/hooks'),
			utils: path.resolve(__dirname, '../src/utils'),
			assets: path.resolve(__dirname, '../src/assets'),
			store: path.resolve(__dirname, '../src/store'),
			types: path.resolve(__dirname, '../src/types'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/img/[hash][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name][ext]',
				},
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				exclude: /\.module\.css$/,
			},
			{
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[local]-[hash:base64:5]',
							},
						},
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /\.module\.scss$/,
			},
			{
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[local]-[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
				include: /\.module\.scss$/,
			},
		],
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: 'bundle.js',
		assetModuleFilename: './assets/img/[name][ext]',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: env === 'dev' ? '[name].css' : '[name].[contenthash].css',
		}),
		new ESLintPlugin({
			extensions: ['ts', 'tsx'],
		}),
		new Dotenv(),
	],
})
