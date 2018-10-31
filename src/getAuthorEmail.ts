import { spawnSync } from 'child_process';

export default (): string => {
  const [
    firstArg,
    ...remainingArgs
  ]: string[] = 'git config --get user.email'.split(' ');

  let result = spawnSync(firstArg, remainingArgs);
  return result.stdout.toString();
};
