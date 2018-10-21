import { CosmiconfigResult } from 'cosmiconfig';
import gitAuthorCheck, {
  getAuthorEmail,
  getConfig,
  validateAuthor,
} from './index';

describe('git author check', () => {
  expect(() => {
    gitAuthorCheck();
  }).not.toThrow();
});

describe('author validation', () => {
  const INVALID_TEST_CONFIG: CosmiconfigResult = {
    config: {
      allowedDomains: null,
    },
    filepath: '.',
    isEmpty: false,
  };
  const VALID_TEST_CONFIG: CosmiconfigResult = {
    config: {
      allowedDomains: ['endemolshine.com'],
    },
    filepath: '.',
    isEmpty: false,
  };
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

describe('get config', () => {
  it('returns a CosmiconfigResult', () => {
    const result: CosmiconfigResult = getConfig();
    expect(result).not.toBe(null);
  });
});

describe('get author email', () => {
  it('returns a valid email string', () => {
    expect(getAuthorEmail()).toMatch(/.*@.*\..*/);
  });
});
