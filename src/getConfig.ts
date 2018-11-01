import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader';
import cosmiconfig, { CosmiconfigResult } from 'cosmiconfig';

const pkg = require('../package.json');

export default (): CosmiconfigResult => {
  const moduleName = pkg.name.split('/')[1].replace(/-/g, '');

  const explorer = cosmiconfig(moduleName, {
    loaders: {
      '.ts': {
        async: TypeScriptLoader,
      },
    },
  });

  return explorer.searchSync();
};
