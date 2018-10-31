import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader';
import cosmiconfig, { CosmiconfigResult } from 'cosmiconfig';

export default (): CosmiconfigResult => {
  const explorer = cosmiconfig('gitAuthorCheck', {
    loaders: {
      '.ts': {
        async: TypeScriptLoader,
      },
    },
  });

  return explorer.searchSync();
};
