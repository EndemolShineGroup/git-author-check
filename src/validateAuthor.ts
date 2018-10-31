import chalk from 'chalk';
import { CosmiconfigResult } from 'cosmiconfig';

export default (cosmiconfigResult: CosmiconfigResult, authorEmail: string) => {
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
