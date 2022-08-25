require('babel-polyfill')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
