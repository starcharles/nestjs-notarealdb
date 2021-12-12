import { Inject } from '@nestjs/common';

import { getRepositoryToken } from '../utils/store.util';

export const InjectCollection = (entity: any): ReturnType<typeof Inject> =>
  Inject(getRepositoryToken(entity));
