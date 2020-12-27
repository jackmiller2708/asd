const path = require('path');

module.exports = {
    entry: {
        index: './src/javascripts/index-main.js',
        admin: './src/javascripts/admin-main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
        rules: [
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
    }
};