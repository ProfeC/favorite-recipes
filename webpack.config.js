const webpack = require("webpack");
const path = require("path");

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
    entry: {
		app: path.join(PATHS.app, "index.tsx"),
		vendor: [ "react", "react-dom" ]
	},
    output: {
        filename: "[name].bundle.js",
		path: "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: "/node_modules"
			},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
        ]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(), // enable HMR globally
		new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
		new webpack.optimize.SplitChunksPlugin({
			"names": ["vendor", "manifest"] // Specify the common bundle's name.
		}),
	],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
	},

	devServer: {
		clientLogLevel: "info",
		contentBase: PATHS.build,
		publicPath: PATHS.build,
		compress: true,
		port: 9000,
		hot: true,
		overlay: false
	}
};
