var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: 'bundle.js', //  '[name]-[hash].js',
        publicPath: '/assets'
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },

    devtool: "source-map",

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/, loaders: [ "ts-loader" ] //'react-hot-loader/webpack'
            },
            {
                test: /\.css/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9\.]*)?$/,
                loader: 'url?limit=100000'
            },
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.NamedModulesPlugin()
        // new ExtractTextPlugin('[hash].css')
    ]
};