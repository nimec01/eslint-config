const fs = require('node:fs');
const path = require('node:path');

exports.isInstalled = (packageName) => {
  if (!packageName) {
    throw new Error('Package name is required');
  }

  try {
    require(packageName);
  } catch {
    return false;
  }

  return true;
};

exports.isTypeScriptProject = () =>
  fs.existsSync(path.resolve('.', 'tsconfig.json'));
