const path = require("path");
const include = path.resolve(__dirname, '../');
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
  
    // Extend it as you need.
  
    // For example, add typescript loader:
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader!ts-loader',
      exclude: /node_modules/,
      include
    });
    config.resolve.extensions.push(".ts", ".tsx", ".js");
  
    return config;
  };