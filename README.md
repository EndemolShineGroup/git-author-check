# @endemolshinegroup/git-author-check

[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Build Status][icon-ci]][link-ci]
[![Greenkeeper Status][icon-greenkeeper]][link-greenkeeper]

[![Code Issues][icon-issues]][link-issues]
[![Codebase Maintainability][icon-maintainability]][link-maintainability]
[![Test Coverage][icon-coverage]][link-coverage]
[![Jest][icon-jest]][link-jest]

[![Commitizen][icon-commitizen]][link-commitizen]
[![Semantic Release][icon-semantic-release]][link-semantic-release]
[![Prettier][icon-prettier]][link-prettier]

A pre-commit tool that validates the commit authors' email address.

## Installation

```bash
yarn add -D husky @endemolshinegroup/git-author-check
```

## Usage

This package uses Cosmiconfig to load its' configuration, so you can add a
configuration file in one of the following ways:

- a `gitAuthorCheck` property in package.json

```json
{
  "gitAuthorCheck": {
    "allowedDomains": [
      "endemolshine.com"
    ]
  },
}
```

- a `.gitauthorcheckrc` file in JSON or YAML format
- a `.gitauthorcheckrc.json` file
- a `.gitauthorcheckrc.yaml`, `.gitauthorcheckrc.yml`, or `.gitauthorcheckrc.js` file
- a `gitauthorcheck.config.js` or `gitauthorcheck.config.ts` file exporting a JS object

```json
{
  "allowedDomains": [
    "endemolshine.com"
  ]
}
```

Then add the following to your Husky configuration file:

```json
{
  "hooks": {
    "pre-commit": "git-author-check"
  }
}
```

[icon-license]: https://img.shields.io/github/license/EndemolShineGroup/git-author-check.svg?longCache=true&style=flat-square
[link-license]: LICENSE
[icon-npm]: https://img.shields.io/npm/v/@endemolshinegroup/git-author-check.svg?longCache=true&style=flat-square
[link-npm]: https://www.npmjs.com/package/@endemolshinegroup/git-author-check
[icon-ci]: https://img.shields.io/travis/com/EndemolShineGroup/git-author-check.svg?longCache=true&style=flat-square
[link-ci]: https://travis-ci.com/EndemolShineGroup/git-author-check
[icon-greenkeeper]: https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?longCache=true&style=flat-square
[link-greenkeeper]: https://greenkeeper.io/

[icon-issues]: https://img.shields.io/codeclimate/issues/EndemolShineGroup/git-author-check.svg?longCache=true&style=flat-square
[link-issues]: https://codeclimate.com/github/EndemolShineGroup/git-author-check/issues
[icon-maintainability]: https://img.shields.io/codeclimate/maintainability/EndemolShineGroup/git-author-check.svg?longCache=true&style=flat-square
[link-maintainability]: https://codeclimate.com/github/EndemolShineGroup/git-author-check
[icon-coverage]: https://img.shields.io/codecov/c/github/EndemolShineGroup/git-author-check/develop.svg?longCache=true&style=flat-square
[link-coverage]: https://codecov.io/gh/EndemolShineGroup/git-author-check

[icon-jest]: https://img.shields.io/badge/tested_with-jest-99424f.svg?longCache=true&style=flat-square
[link-jest]: https://jestjs.io/

[icon-commitizen]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?longCache=true&style=flat-square
[link-commitizen]: http://commitizen.github.io/cz-cli/
[icon-semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?longCache=true&style=flat-square
[link-semantic-release]: https://semantic-release.gitbooks.io/semantic-release/
[icon-prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?longCache=true&style=flat-square
[link-prettier]: https://prettier.io/

