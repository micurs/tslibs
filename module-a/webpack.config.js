const path = require('path');

module.exports = {
  entry: [
    path.join( __dirname, '/src/index.ts')
  ],
  devtool: 'source-map',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve( __dirname, 'dist'),
    devtoolModuleFilenameTemplate: 'module-a///[resource-path]',
    library: 'module-a',
    libraryTarget: 'umd'
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  module: {
      rules: [
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
