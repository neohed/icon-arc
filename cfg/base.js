'use strict';

const defaultSettings = require('./defaults');

module.exports = {
    devtool: 'eval',
    context: __dirname,
    output: {
        path: "/",
        filename: '[name].js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        hot: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        quiet: false,
        noInfo: false,
        stats: {colors: true}
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            config: `${defaultSettings.srcPath}/cfg/` + process.env.REACT_WEBPACK_ENV
        }
    },
    module: {}
};
