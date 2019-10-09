const path = require('path');
const srcFolder = 'demo';
const srcPath = path.join(__dirname, '/..', srcFolder);
const defaultPort = 3012;

const getDefaultModules = () => ({
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["@babel/preset-env", "@babel/preset-react"]
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.styl/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.(png|jpg|gif|woff|woff2)$/,
            loader: 'url-loader'
        },
        {
            test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        },
        {
            test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },
        {
            test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }
    ]
});

module.exports = {
    srcPath,
    publicPath: '/',
    port: defaultPort,
    getDefaultModules: getDefaultModules,
    serveraddress: process.env.serveraddress
};
