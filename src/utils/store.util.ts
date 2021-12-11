import { DEFAULT_CONNECTION_NAME } from '../notarealdb.constant';
import { EntityClassType } from '../interfaces';

export function getStoreName(): string {
  return DEFAULT_CONNECTION_NAME;
}
export function getRepositoryToken(entity: EntityClassType) {
  return `${entityName(entity)}Repository`;
}

export function entityName(entity: EntityClassType) {
  return entity.constructor.name.toLowerCase();
}
