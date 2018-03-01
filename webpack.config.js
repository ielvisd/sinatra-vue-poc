const { join } = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        join(__dirname, 'assets/index')
    ],
    output: {
        filename: 'app.bundle.js',
        path: join(__dirname, 'public'),
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            use: 'vue-loader'
        }]
    }
};
