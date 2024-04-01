import slsw from 'serverless-webpack';
import path from 'path';

export default {
  entry: {
    getProductsList: './src/functions/api/products/getProductsList',
    getProductsById: './src/functions/api/products/getProductsById',
  },
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: slsw.lib.webpack.isLocal ? 'inline-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              module: 'es6',
              target: 'es2017',
            },
            transpileOnly: true,
          },
        },
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'artifacts'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
};
