const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './server/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()],
  // externals: nodeModules,
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  }
}