import path from 'path';

export default {
  entry: './src/search.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
