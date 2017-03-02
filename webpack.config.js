const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		entry: __dirname + '/client/index.js', 
		output: {
			path: __dirname + '/public/js',
			filename: 'bundle.js',
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel',
				},
			],
		},
	},
	{
		entry: {
			common: __dirname + '/client/scss/index.scss'
		},
		output: {
			path: __dirname + '/public/css',
			filename: 'index.css',
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
				},
			],
		},
		plugins: [
			new ExtractTextPlugin('index.css')
		],
	},
	{
		entry: __dirname + '/client/polyfills/index.js',
		output: {
			path: __dirname + '/public/js',
			filename: 'polyfills.js',
		},
	},
];