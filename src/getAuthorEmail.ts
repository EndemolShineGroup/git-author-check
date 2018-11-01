import { spawnSync } from 'child_process';

export default (): string => {
  const [
    firstArg,
    // tslint:disable-next-line:trailing-comma
    ...remainingArgs
  ]: string[] = 'git config --get user.email'.split(' ');

  let result = spawnSync(firstArg, remainingArgs);
  return result.stdout.toString();
};
