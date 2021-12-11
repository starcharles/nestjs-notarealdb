import { Provider } from '@nestjs/common';
import { EntityClassType } from './interfaces';
import { Collection, DataStore } from 'notarealdb';
import { entityName, getRepositoryToken, getStoreName } from './utils';

export function createCollections(
  entities: EntityClassType[] = [],
): Provider[] {
  return (entities || []).map(entity => ({
    inject: [getStoreName()],
    provide: getRepositoryToken(entity),
    useFactory: (store: DataStore): Collection<typeof entity> => {
      return store.collection<typeof entity>(entityName(entity));
    },
  }));
}
