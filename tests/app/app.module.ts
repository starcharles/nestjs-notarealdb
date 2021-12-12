import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplesModule } from './apples/apples.module';
import { NotARealDbModule } from '../../src';

@Module({
  imports: [ApplesModule, NotARealDbModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
