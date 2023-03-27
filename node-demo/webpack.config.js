module.exports = {
    entry: './src/main.js', //设置入口文件
    output: {
        filename: 'bundle.js', //设置输出文件名
        path: __dirname + '/dist' //设置输出文件路径
    },
    // 配置css
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory:"./"
        },
        port: 8080,
    }
}