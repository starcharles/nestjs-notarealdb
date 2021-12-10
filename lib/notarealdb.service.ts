import { Inject, Injectable } from '@nestjs/common';
import { NOTATREALDB_OPTIONS } from './notarealdb.constant';
import { NotARealDbOptions } from './interfaces';
import path from 'path';
import { DataStore } from 'notarealdb';

@Injectable()
export class NotARealDbService {
  constructor(
    @Inject(NOTATREALDB_OPTIONS) private readonly options: NotARealDbOptions,
  ) {}
}
