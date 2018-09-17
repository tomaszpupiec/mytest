const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const src = './src';

module.exports = {

	entry: {
		index: src + '/index.ts'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},			
			{
				test: /\.html$/,
				loader: 'ignore-loader'
			}
			
		]
	},

	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		modules: [
			path.resolve(src),
			path.resolve('./node_modules')
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 2
		}),
		new ManifestPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})		
	]
	,
//	devtool: 'inline-source-map'	
	devtool: "source-map"

};
