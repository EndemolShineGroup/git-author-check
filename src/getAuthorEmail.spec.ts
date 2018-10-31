import getAuthorEmail from './getAuthorEmail';

describe('#getAuthorEmail', () => {
  it('returns a valid email string', () => {
    expect(getAuthorEmail()).toMatch(/.*@.*\..*/);
  });
});
