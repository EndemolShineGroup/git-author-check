import validateAuthor from './validateAuthor';

import INVALID_TEST_CONFIG from './__fixtures__/invalidTestConfig.json';
import VALID_TEST_CONFIG from './__fixtures__/validTestConfig.json';

describe('#validateAuthor', () => {
  const INVALID_TEST_EMAIL: string = 'test@test.com';
  const VALID_TEST_EMAIL: string = 'test@endemolshine.com';

  it("doesn't fail when run with valid input", () => {
    expect(() => {
      validateAuthor(VALID_TEST_CONFIG, VALID_TEST_EMAIL);
    }).not.toThrow();
  });

  it('fails if no config is found', () => {
    expect(() => {
      validateAuthor(null, VALID_TEST_EMAIL);
    }).toThrow();
  });

  it('fails if config is found but not valid', () => {
    expect(() => {
      validateAuthor(INVALID_TEST_CONFIG, VALID_TEST_EMAIL);
    }).toThrow();
  });

  it('fails if author email domain does not match allowed domains', () => {
    expect(() => {
      validateAuthor(VALID_TEST_CONFIG, INVALID_TEST_EMAIL);
    }).toThrow();
  });
});
