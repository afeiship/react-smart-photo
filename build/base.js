import {
  configs,
  inputs,
  loaders,
  outputs,
  plugins
} from '@jswork/webpack-lib-kits';

export default {
  mode: configs.mode(),
  entry: inputs.build(),
  output: outputs.dev(),
  resolve: {
    extensions: configs.extensions(),
    alias: configs.alias()
  },
  module: {
    rules: [
      loaders.babel(),
      loaders.image(),
      loaders.sass(),
      loaders.version()
    ]
  },
  plugins: [
    plugins.progressBar(),
    plugins.minCssExtract()
  ]
};
