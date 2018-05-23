'use strict';

const serve = require('webpack-serve');
const webpackConfig = require('./webpack.config.js');
const path = require("path");

let mode = process.env.WEBPACK_SERVE ? 'development' : 'production';

// NOTE: Setup the development sever.
serve({
	config: webpackConfig,
	content: path.join(__dirname, "dist"),
	logLevel: "debug",
	logTime: true,
	hot: true,
	on: {
		'listening': () => {
			console.info('listening in ' + mode + ' mode.');
		}
	}
});
