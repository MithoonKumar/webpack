module.exports = {
  //entry point
  entry: './src/script-2.js',
  //define output point
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }//query
      }
    ]//loaders
  }//module
}
