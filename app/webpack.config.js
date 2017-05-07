const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: /(module-a\/dist)/,
        loader: "source-map-loader"
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'tslint-loader',
        query: {
          visualStudioErrorFormat : true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
        query: {
          visualStudioErrorFormat : true
        }
      }
    ]
  }
};
