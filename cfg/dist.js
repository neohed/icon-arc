const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        library: 'iconarc',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["@babel/preset-env", "@babel/preset-react"]
            }
        }]
    },
    externals: {
        'react': 'commonjs react'
    }
};
