const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './js/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.js', '.momo']
  },
  module: {
    loaders: [
      {
        test: /\.momo$/,
        loaders: ['wasm-loader', 'momo-loader']
      }
    ]
  }
};

