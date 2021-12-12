import { NOTATREALDB_STORE_CONNECTION } from '../notarealdb.constant';
import { BaseEntity } from '../interfaces';

export function getStoreName(): string {
  return NOTATREALDB_STORE_CONNECTION;
}
export function getRepositoryToken(entity: BaseEntity): string {
  return `${entityName(entity)}Repository`;
}

export function entityName(entity: BaseEntity): string {
  return entity.name.toLowerCase() + 's';
  // if (entity instanceof Function) {
  //   return entity.name.toLowerCase() + 's';
  // }
  // return entity.constructor.name.toLowerCase() + 's';
}
