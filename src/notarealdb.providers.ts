import { Provider } from '@nestjs/common';
import { EntityClassType } from './interfaces';
import { DataStore } from 'notarealdb';
import { entityName, getRepositoryToken, getStoreName } from './utils';

export function createCollections(
  entities: EntityClassType[] = [],
): Provider[] {
  return (entities || []).map(entity => ({
    inject: [getStoreName()],
    provide: getRepositoryToken(entity),
    useFactory: (store: DataStore) => {
      return store.collection<typeof entity>(entityName(entity));
    },
  }));
}
