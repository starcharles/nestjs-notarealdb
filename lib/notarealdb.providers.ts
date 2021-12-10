import { Inject, Injectable, Provider } from '@nestjs/common';
import { NOTATREALDB_OPTIONS } from './notarealdb.constant';
import { EntityClassType, NotARealDbOptions } from './interfaces';

export function createProviders(entities: EntityClassType[] = []): Provider[] {
  entities.map(entity => {});
}
