var webpack = require("webpack"),
		path    = require("path");

var paths = {
	src: path.resolve(__dirname, "public/js/"),
	modules: path.resolve(__dirname, "node_modules/"),
	dist: path.resolve(__dirname, "public/dist/")
};

var config = {
	context: paths.src,
	entry: "./index.jsx",
	output: {
		path: paths.dist,	
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /node_modules/, 
				loader: "jsx-loader!babel-loader?stage=0"
			}	
		]	
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
		root: paths.src,
		modulesDirectories: ["node_modules"]
	},
	watch: true
};

module.exports = config;
