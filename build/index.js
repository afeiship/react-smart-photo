import { configs, inputs, outputs, loaders, plugins } from 'webpack-lib-kits';

export default {
  mode: configs.mode(),
  entry: inputs.build(),
  output: outputs.dev(),
  resolve: {
    extensions: configs.extensions(),
    alias: configs.alias()
  },
  module: {
    rules: [loaders.babel(), loaders.image(), loaders.sass()]
  },
  plugins: [plugins.minCssExtract()]
};
