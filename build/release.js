import buildConfig from './build';
import merge from 'webpack-merge';
import { configs, inputs, outputs, loaders, plugins } from 'webpack-lib-kits';
export default merge(buildConfig, {
  plugins: [plugins.semver()]
});
