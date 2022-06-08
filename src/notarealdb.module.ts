import { DynamicModule, Module, Type } from '@nestjs/common';
import { NotARealDbCoreModule } from './notarealdb-core.module';
import { createCollections } from './notarealdb.providers';
import { BaseEntity, NotARealDbOptions } from './interfaces';

@Module({})
export class NotARealDbModule {
  static forRoot(options: NotARealDbOptions = {}): DynamicModule {
    return {
      module: NotARealDbModule,
      imports: [NotARealDbCoreModule.forRoot(options)],
    };
  }

  static forFeature(entities: Type<BaseEntity>[] = []): DynamicModule {
    const providers = createCollections(entities);
    return {
      module: NotARealDbModule,
      providers: providers,
      exports: providers,
    };
  }
}
