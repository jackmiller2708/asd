const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/javascripts/index-main.js',
        admin: './src/javascripts/admin-main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },plugins: [
        new CleanWebpackPlugin({
            dry: true,
            dangerouslyAllowCleanPatternsOutsideProject: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/index.pug",
            filename: "../views/index.pug",
            chunks: ['index'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/admin.pug",
            filename: "../views/admin.pug",
            chunks: ['admin'],
            inject: true
        })
    ],

    module: {
        rules: [
            // Include pug-loader to process the pug files
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            // Processing SASS files.
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 3. Creates `style` nodes from JS strings
                    "style-loader",

                    // 2. Translates CSS into CommonJS
                    "css-loader",

                    // 1. Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            // Importing JQuery.
            {
                test: /jquery.+\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: {
                        exposes: {
                            globalName: "$",
                            override: true,
                        }},
                    },
                ]
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            maxSize: 1048576,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};