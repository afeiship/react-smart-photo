import baseConfig from './base';
import merge from 'webpack-merge';
import { configs, inputs, outputs, loaders, plugins } from '@jswork/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.docs(),
  output: outputs.dev(),
  devtool: configs.devtool(),
  devServer: configs.devServer(),
  plugins: [plugins.html()]
});
