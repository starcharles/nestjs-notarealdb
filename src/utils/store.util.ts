import { NOTATREALDB_STORE_CONNECTION } from '../notarealdb.constant';
import { BaseEntity } from '../interfaces';
import { Type } from '@nestjs/common';

export function getStoreName(): string {
  return NOTATREALDB_STORE_CONNECTION;
}
export function getRepositoryToken(entity: Type<BaseEntity>): string {
  return `${entityName(entity)}Repository`;
}

export function entityName(entity: Type<BaseEntity>): string {
  return entity.name.toLowerCase() + 's';
}
