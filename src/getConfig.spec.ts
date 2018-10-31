import { CosmiconfigResult } from 'cosmiconfig';

import getConfig from './getConfig';

describe('#getConfig', () => {
  it('returns a CosmiconfigResult', () => {
    const result: CosmiconfigResult = getConfig();
    expect(result).not.toBe(null);
  });
});
