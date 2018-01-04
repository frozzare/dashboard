const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext].js',
            },
          },
          'babel-loader',
          'styled-jsx-css-loader',
        ],
      }
    );
    config.plugins.push(
      new Dotenv({ path: './.env' }),
    );
    return config;
  }
};
