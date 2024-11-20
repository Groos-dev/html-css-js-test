const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/, // Process .less files
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.js$/, // Process .js files with Babel
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: './dist', // Serve files from dist
    hot: true, // Enable HMR
    port: 3000, // Change port if needed
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML
    }),
  ],
};
