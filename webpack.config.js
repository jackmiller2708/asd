const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/javascripts/index-main.js',
        admin: './src/javascripts/admin-main.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",

                    // Translates CSS into CommonJS
                    "css-loader",

                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};