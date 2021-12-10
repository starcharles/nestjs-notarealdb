import { DynamicModule, Module } from '@nestjs/common';
import { NotARealDbCoreModule } from './notarealdb-core.module';
import { createProviders } from './notarealdb.providers';
import { EntityClassType, NotARealDbOptions } from './interfaces';

@Module({})
export class NotARealDbModule {
  static forRoot(
    options: NotARealDbOptions = {
      disabled: false,
      retry: false,
    },
  ): DynamicModule {
    if (options.disabled)
      return {
        module: NotARealDbCoreModule,
      };
    return {
      module: NotARealDbModule,
      imports: [NotARealDbCoreModule.forRoot(options)],
    };
  }

  static forFeature(entities: EntityClassType[] = []): DynamicModule {
    const providers = createProviders(entities);
    // const customRepositoryEntities = getCustomRepositoryEntity(entities);
    // EntitiesMetadataStorage.addEntitiesByConnection(connection, [
    //   ...entities,
    //   ...customRepositoryEntities,
    // ]);
    return {
      module: NotARealDbModule,
      providers: providers,
      exports: providers,
    };
  }
}
