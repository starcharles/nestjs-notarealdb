# Nest.js Json Based DB.

You don't need to prepare DB. use json file.
 - simple wrapper of package [mirkonasato/notarealdb](https://github.com/mirkonasato/notarealdb) for NestJS
 - ### Attention `This is not for Production use.`
 - only development use is prefer

## Installation

```shell script
npm install nestjs-notarealdb

```

## Example module setup

#### import at app.module.ts
```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplesModule } from './apples/apples.module';
import { NotARealDbModule } from 'nestjs-notarealdb';

@Module({
  imports: [
    ApplesModule,
    NotARealDbModule.forRoot({
      dataDirName: 'store' // anyting you want. default 'data'
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
#### Then, import at feature modules like this
```typescript
import { Module } from '@nestjs/common';
import { ApplesService } from './apples.service';
import { ApplesController } from './apples.controller';
import { Apple } from '../shared/models/apple.model';
import { NotARealDbModule } from 'nestjs-notarealdb';

@Module({
  imports:[
    NotARealDbModule.forFeature([Apple])
  ],
  controllers: [
    ApplesController,
  ],
  providers: [ApplesService]
})
export class ApplesModule {}
```

### service: @InjectCollection is need.
```typescript
export class ApplesService {
  constructor(@InjectCollection(Apple) private readonly collection: Collection<Apple>) {
  }

  create(createAppleDto: CreateAppleDto) {
    return this.collection.create(createAppleDto)
  }

  findAll() {
    this.collection.list()
  }

  findOne(id: string) {
    return this.collection.get(id)
  }

.....................

}

````

## License
The code is under MIT license. See the LICENSE file for details.
