import { DynamicModule, Global, Inject, Module } from '@nestjs/common';
import { DataStore } from 'notarealdb';
import * as path from 'path';
import { NotARealDbOptions } from './interfaces';
import {
  DEFAULT_DATA_DIRECTORY_NAME,
  NOTATREALDB_OPTIONS,
  NOTATREALDB_STORE_CONNECTION,
} from './notarealdb.constant';

@Global()
@Module({})
export class NotARealDbCoreModule {
  constructor(
    @Inject(NOTATREALDB_OPTIONS) private readonly options: NotARealDbOptions,
  ) {}

  static forRoot(options: NotARealDbOptions = {}): DynamicModule {
    const moduleOptions = {
      provide: NOTATREALDB_OPTIONS,
      useValue: options,
    };
    const connectionProvider = {
      provide: NOTATREALDB_STORE_CONNECTION,
      useValue: this.createConnection(options),
    };

    return {
      module: NotARealDbCoreModule,
      providers: [moduleOptions, connectionProvider],
      exports: [connectionProvider],
    };
  }

  private static createConnection(options: NotARealDbOptions): DataStore {
    const dirPath = path.resolve(
      __dirname,
      '../../',
      options.dataDirName ?? DEFAULT_DATA_DIRECTORY_NAME,
    );
    console.log('dirPath:', dirPath);
    return new DataStore(dirPath);
  }
}
