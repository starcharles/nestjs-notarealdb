import { Provider } from '@nestjs/common';
import { BaseEntity } from './interfaces';
import { Collection, DataStore } from '@starcharles/notarealdb';
import { entityName, getRepositoryToken, getStoreName } from './utils';

export function createCollections(entities: BaseEntity[] = []): Provider[] {
  return entities.map(entity => ({
    inject: [getStoreName()],
    provide: getRepositoryToken(entity),
    useFactory: (store: DataStore): Collection<BaseEntity> => {
      return getCollection(store, entity);
    },
  }));
}

function getCollection(store: DataStore, entity: BaseEntity) {
  return store.collection(entityName(entity));
}
