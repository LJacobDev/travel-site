const path = require('path');

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true, //adding this makes it so that it continuously runs and auto bundles any changes detected in the files it bundles
    module: {
        rules: [
            {
                //if a file is detected having .css as extention, use style-loader and css-loader
                test: /\.css$/i,
                use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}