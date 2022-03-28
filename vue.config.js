const { defineConfig } = require('@vue/cli-service');

config = {
  transpileDependencies: true,
};

if (process.env.VUE_APP_ENVIRONMENT === 'azure') {
  console.log('==== Azure ====');
  config.configureWebpack = {
    plugins: [new Dotenv()],
  };
} else {
  console.log('==== Non-Azure ====');
}

module.exports = defineConfig(config);
