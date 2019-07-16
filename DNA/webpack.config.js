var path = require('path');

module.exports = {

    entry: './index.js',
    output:{
        path: path.resolve(__dirname,'output'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
            
            
        ]

    }
    
}
