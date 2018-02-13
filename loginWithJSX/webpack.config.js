var path = require('path');
module.exports = {
  entry: ['webpack/hot/dev-server.js', path.resolve(__dirname, 'src/index.js')],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
            {test:/\.(js|jsx)$/,exclude:/node_modules/,loader:'babel-loader'},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.(png|jpg)$/,loader:'url?limit=25000'}
        ]
    },
};