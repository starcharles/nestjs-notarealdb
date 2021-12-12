import { Module } from '@nestjs/common';
import { ApplesService } from './apples.service';
import { ApplesController } from './apples.controller';
import { Apple } from '../shared/models/apple.model';
import { NotARealDbModule } from '../../../src';

@Module({
  imports: [NotARealDbModule.forFeature([Apple])],
  controllers: [ApplesController],
  providers: [ApplesService],
})
export class ApplesModule {}
