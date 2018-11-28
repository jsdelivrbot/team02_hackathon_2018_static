const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildFolder = 'dist';
const bundleFileName = 'bundle';
const staticPath = './';

module.exports = {
	mode: "development",
	entry: {
		[bundleFileName]: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, buildFolder),
		filename: path.join(bundleFileName + '.js'),
		publicPath: staticPath
	},
	resolve: {
		extensions: ['.js'],
		modules: ['node_modules']
	},
	cache: true,
	plugins: [
		new CleanWebpackPlugin([buildFolder]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	]
};

