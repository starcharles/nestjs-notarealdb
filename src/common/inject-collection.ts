import { Inject } from '@nestjs/common';

import { EntityClassType } from '../interfaces';
import { getRepositoryToken } from '../utils/store.util';

export const InjectCollection = (
  entity: EntityClassType,
): ReturnType<typeof Inject> => Inject(getRepositoryToken(entity));
