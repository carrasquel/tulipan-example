module.exports = {
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
    }
}