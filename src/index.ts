#!/usr/bin/env node

import getAuthorEmail from './getAuthorEmail';
import getConfig from './getConfig';
import validateAuthor from './validateAuthor';

const run = () => {
  validateAuthor(getConfig(), getAuthorEmail());
};

run();
