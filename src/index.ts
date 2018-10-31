#!/usr/bin/env node

import getAuthorEmail from './getAuthorEmail';
import getConfig from './getConfig';
import validateAuthor from './validateAuthor';

export default () => {
  validateAuthor(getConfig(), getAuthorEmail());
};
