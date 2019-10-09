/* eslint no-console: 0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const {port} = require('./cfg/defaults');

const compiler = webpack(config);
const app = new WebpackDevServer(compiler, config.devServer);

app.listen(port, 'localhost', err => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
});
