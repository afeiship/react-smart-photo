import {
  inputs,
  outputs,

  plugins
} from '@jswork/webpack-lib-kits';
import OfflinePlugin from 'offline-plugin';
import merge from 'webpack-merge';
import baseConfig from './base';

export default merge(baseConfig, {
  entry: inputs.docs(),
  output: outputs.docs(),
  plugins: [
    plugins.clean(),
    plugins.html(),
    new OfflinePlugin({
      ServiceWorker: {
        events: true
      }
    })
  ]
});
