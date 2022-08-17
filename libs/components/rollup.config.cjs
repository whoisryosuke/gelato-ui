const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const { vanillaExtractPlugin } = require('@vanilla-extract/rollup-plugin');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    plugins: [...nxConfig.plugins, vanillaExtractPlugin()],
  };
};
