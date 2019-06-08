var path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
    entry : './app/index.tsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            { test : /\.(ts|tsx|js)$/, use:'babel-loader' },
            { test : /\.(css|scss)$/, use:['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=true' }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}