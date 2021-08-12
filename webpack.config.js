const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    mode: "production",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
        })
    ]
}