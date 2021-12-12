import { DynamicModule, Module } from '@nestjs/common';
import { NotARealDbCoreModule } from './notarealdb-core.module';
import { createCollections } from './notarealdb.providers';
import { NotARealDbOptions } from './interfaces';

@Module({})
export class NotARealDbModule {
  static forRoot(options: NotARealDbOptions = {}): DynamicModule {
    return {
      module: NotARealDbModule,
      imports: [NotARealDbCoreModule.forRoot(options)],
    };
  }

  static forFeature(entities: any[] = []): DynamicModule {
    const providers = createCollections(entities);
    return {
      module: NotARealDbModule,
      providers: providers,
      exports: providers,
    };
  }
}
