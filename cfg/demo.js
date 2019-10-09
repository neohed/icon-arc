const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');

// Add needed plugins here
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
        'webpack/hot/only-dev-server',
        path.join(defaultSettings.srcPath, 'index.js')
    ],
    cache: true,
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(defaultSettings.srcPath, 'index.template.ejs'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    module: defaultSettings.getDefaultModules(),
    mode: 'development'
});

module.exports = config;
