# Nest.js Json Based DB.

You don't need to prepare DB. use json file.
 - simple wrapper of package [mirkonasato/notarealdb](https://github.com/mirkonasato/notarealdb) for NestJS
 - ### Attention `This is not for Production use.`
 - only development use is prefer

[![NPM package link](https://nodei.co/npm/nestjs-ip-middlewa.png?downloads=true&cacheBust=2)](https://www.npmjs.com/package/nestjs-ip-middleware)

## Installation

```shell script
npm install nestjs-notarealdb

```

## Example module setup

```typescript
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestIpMiddleware } from 'nestjs-ip-middleware'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestIpMiddleware)
      .forRoutes('*');
  }
}
```

## Example Usage at Controller

```typescript
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('real-ip')
  getIp(@Req() req: Request): string {
    return req.realIp; // req.realIp is set by this middleware
  }
}


```

## License
The code is under MIT license. See the LICENSE file for details.
