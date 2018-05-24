const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const webpackServeWaitpage = require("webpack-serve-waitpage");

// const parts = require("./lib/parts");
const PATHS = {
    app: path.join(__dirname, "src"),
    build: path.join(__dirname, "dist"),
    components: path.join(__dirname, "src", "components"),
    data: path.join(__dirname, "src", "data"),
    libs: path.join(__dirname, "src", "lib"),
    style: path.join(__dirname, "src", "style")
};

module.exports = {
	// NOTE: Dynamically set the service mode.
	mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

	// NOTE: Entry points.
    entry: {
		app: path.join(PATHS.app, "index.tsx"),
		vendor: [ "react", "react-dom" ]
	},
    output: {
        filename: "[name].bundle.js",
		path: "/dist"
    },

    // NOTE: Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // NOTE: Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // NOTE: All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: "/node_modules"
			},

            // NOTE: All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
        ]
	},

	plugins: [
		// new webpack.HotModuleReplacementPlugin(), // enable HMR globally
		new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
		new webpack.optimize.SplitChunksPlugin({
			"names": ["vendor", "manifest"] // Specify the common bundle's name.
		}),
		new HtmlWebpackPlugin({
			appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
			appMountId: 'root',
			// bodyHeaderSnippet: '<h1><%= htmlWebpackPlugin.options.title %></h1>',
			// bodyHeaderSnippetId: 'page-header',
			// bodyHtmlSnippet: '<main id="main"></main>',
			favicon: path.join(PATHS.app, "img", "favicon.ico"),
			hash: true,
			headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
			inject: false,
			lang: 'en-US',
			meta: [
				{
					name: 'description',
					content: 'A simple web app to catalogue favorite recipes.'
				}
			],
			mobile: true,
			// template: path.join(PATHS.app, 'templates', 'index.ejs'),
			template: require('html-webpack-template'),
			title: "My Favorite Recipes",
			unsupportedBrowser: true
		}),
	],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
	// },

	serve: {
		content: path.join(__dirname, "dist"),
		dev: {
			publicPath: "/"
		},
		logLevel: "info",
		logTime: true,
		hot: true,
		on: {
			'listening': () => {
				console.info('listening in ' + module.exports.mode + ' mode.');
			}
		},
		add: (app, middleware, options) => {
			app.use(webpackServeWaitpage(options, {
				disableWhenValid: false,
				theme: "material"
			})); // * Be sure to pass the options argument from the arguments

			// Make sure the usage of webpack-serve-waitpage will be before the following commands if exists
			middleware.webpack();
			// middleware.content()
		}
	}
};
