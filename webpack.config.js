const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
    },
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                include: [
                    path.join(__dirname, 'src'),
                ],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            }

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
        filename: "index.html",
        manifest: "./public/manifest.json",
    })],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
}