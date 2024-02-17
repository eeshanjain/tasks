const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');

module.exports = {
    entry: './client/src/index.tsx', // Entry point of your React application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
        publicPath: '/', // Public path for assets (e.g., '/static/')
    },
    module: {
        rules: [
            // JavaScript/JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
                    },
                },
            },
            {
                test: /\.(ts|tsx)$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    },
                }],
                exclude: /node_modules/,
            },
            // CSS files (optional)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html', // Path to HTML template
            // favicon: './public/favicon.ico', // Ppath to favicon (optional)
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed)
        })
    ],
    devServer: {
        historyApiFallback: true, // Enable HTML5 History API fallback
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
