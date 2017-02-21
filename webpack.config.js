var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");


//利用相对路径通过解析得到绝对路径
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),  //必须是绝对路径或者是正则表达式
                include: SRC_DIR,  //必须是绝对路径或者是正则表达式
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                include: SRC_DIR,
                // loader: 'style-loader!css-loader',
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('postcss-smart-import'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ],



            }
        ]
    },


    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
			inject: 'body',
			title: 'this is title',
			minify: {

			},
			chunks: [],// array


        })
    ]
};

module.exports = config;