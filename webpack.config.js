const webpack = require('webpack')
const path = require('path')
const production = (process.env.NODE_ENV === 'production')

module.exports = {
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'router-link-helper.min.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]

    },
    plugins:[]
};

if(production){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin
    )
}
