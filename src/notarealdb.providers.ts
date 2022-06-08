import { Provider, Type } from '@nestjs/common';
import { BaseEntity } from './interfaces';
import { Collection, DataStore } from 'notarealdb';
import { entityName, getRepositoryToken, getStoreName } from './utils';

export function createCollections(
  entities: Type<BaseEntity>[] = [],
): Provider[] {
  return entities.map(entity => ({
    inject: [getStoreName()],
    provide: getRepositoryToken(entity),
    useFactory: (store: DataStore): Collection<BaseEntity> => {
      return getCollection(store, entity);
    },
  }));
}

function getCollection(store: DataStore, entity: Type<BaseEntity>) {
  return store.collection(entityName(entity));
}
