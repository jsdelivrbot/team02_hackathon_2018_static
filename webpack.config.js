const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildFolder = 'dist';
const bundleFileName = 'team02.hackathon';
const staticPath = './';

const stylesLoader = {
	test: /\.css$/,
	use: [ // TODO: extract css
		'style-loader',
		{
			loader: 'css-loader',
			query: {
				url: false,
				modules: true,
				importLoaders: 1,
				localIdentName: '[name]__[local]___[hash:base64:7]',
			},
		}
	]
};


module.exports = {
	mode: "development",
	entry: {
		[bundleFileName]: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, buildFolder),
		filename: path.join('[name].bundle.js'),
		publicPath: staticPath
	},
	resolve: {
		extensions: ['.js', '.css'],
		modules: ['node_modules']
	},
	cache: true,
	plugins: [
		new CleanWebpackPlugin([buildFolder]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
	module: {
		rules: [
			stylesLoader
		]
	}
};

