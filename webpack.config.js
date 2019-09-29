var path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    entry: './app/index.tsx',
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        plugins: [
                            ["@babel/plugin-transform-runtime"],
                        ],
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=true' },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    mode:'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'app/index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },

}