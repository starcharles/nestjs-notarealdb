import { Inject, Type } from '@nestjs/common';

import { getRepositoryToken } from '../utils/store.util';
import { BaseEntity } from '../interfaces';

export const InjectCollection = (
  entity: Type<BaseEntity>,
): ReturnType<typeof Inject> => Inject(getRepositoryToken(entity));
