const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png | jpe?g | gif | ico)?$/,
                exclude: /node_modules/,
                use: 'file-loader?name=./images/[name].[ext]'
            },
            {
                test: /\.svg/,
                use: {
                  loader: "svg-url-loader",
                  options: {
                    iesafe: true,
                  },
                },
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            favicon: './public/favicon.ico',
            manifest: "./public/manifest.json",
        })
    ],
};