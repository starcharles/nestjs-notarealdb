import * as fs from 'fs/promises';
import * as path from 'path';

export const cleanup = async () => {
  const target = path.resolve(__dirname, '../../', 'app', 'data');
  await fs.rmdir(target, {
    recursive: true,
    // retryDelay: 400,
  });
};
