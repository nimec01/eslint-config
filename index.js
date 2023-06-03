const { isInstalled, isTypeScriptProject } = require('./lib/utils');

const reactInstalled = isInstalled('react');

let config = reactInstalled ? 'react' : 'base';

if (isTypeScriptProject()) {
  config = reactInstalled ? 'react-typescript' : 'typescript';
}

module.exports = require(`./${config}`);
