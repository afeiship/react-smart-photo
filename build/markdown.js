const rmp = require('@jswork/react-markdown-props');
const fs = require('fs');
const indentString = require('indent-string');

require('@jswork/next');
require('@jswork/next-replace-in-file');

nx.declare({
  statics: {
    init: function() {
      var instance = new this();
      instance.reset();
      instance.replace();
    }
  },
  methods: {
    reset: function() {
      fs.copyFileSync('./build/TEMPLATE.md', './README.md');
    },
    replace: function() {
      const docApp = fs.readFileSync('./public/index.js').toString();

      nx.replaceInFile('README.md', [
        ['__GENERATE_DOCS__', rmp('./src/components/index.js')],
        ['__GENERATE_DAPP__', indentString(docApp, 2)],
        ['../src/main', '@jswork/react-smart-photo']
      ]);
    }
  }
});
