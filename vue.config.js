const { defineConfig } = require('@vue/cli-service');

config = {
  transpileDependencies: true,
};

console.log('env:', process.env);

if (process.env.VUE_APP_ENVIRONMENT === 'azure') {
  console.log('==== Azure ====');
  const Dotenv = require('dotenv-webpack');
  config.configureWebpack = {
    plugins: [new Dotenv()],
  };
} else {
  console.log('==== Non-Azure ====');
}

module.exports = defineConfig(config);
