#!/usr/bin/env node

import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader';
import chalk from 'chalk';
import { spawnSync } from 'child_process';
import cosmiconfig, { CosmiconfigResult } from 'cosmiconfig';

const MODULE_NAME = 'gitAuthorCheck';

export const getConfig = (): CosmiconfigResult => {
  const explorer = cosmiconfig(MODULE_NAME, {
    loaders: {
      '.ts': {
        async: TypeScriptLoader,
      },
    },
  });

  return explorer.searchSync();
};

export const getAuthorEmail = (): string => {
  const [
    firstArg,
    ...secondArg
  ]: string[] = 'git config --get user.email'.split(' ');

  let result = spawnSync(firstArg, secondArg);
  return result.stdout.toString();
};

export const validateAuthor = (
  cosmiconfigResult: CosmiconfigResult,
  authorEmail: string,
) => {
  if (!cosmiconfigResult || cosmiconfigResult.isEmpty) {
    const message: string = `No valid config found!  Make sure it is defined in the project package.json`;
    throw new Error(chalk.red(message));
  }

  const allowedDomains = cosmiconfigResult.config.allowedDomains;
  const authorEmailDomain = authorEmail.trim().split('@')[1];

  if (!allowedDomains.includes(authorEmailDomain)) {
    const message: string =
      'Invalid author email domain! Check that your config contains a definition for your domain.';
    throw new Error(chalk.red(message));
  }
};

export default () => {
  validateAuthor(getConfig(), getAuthorEmail());
};
