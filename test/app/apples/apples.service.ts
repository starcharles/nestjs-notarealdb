import { Injectable } from '@nestjs/common';
import { CreateAppleDto } from './dto/create-apple.dto';
import { UpdateAppleDto } from './dto/update-apple.dto';
import { Apple } from '../shared/models/apple.model';
import { InjectCollection, Collection } from '../../../src';

@Injectable()
export class ApplesService {
  constructor(@InjectCollection(Apple) private collection: Collection<Apple>) {}
  create(createAppleDto: CreateAppleDto): string {
    return this.collection.create(createAppleDto);
  }

  findAll(): Apple[] {
    return this.collection.list();
  }

  findOne(id: string): Apple {
    return this.collection.get(id);
  }

  update(id: string, updateAppleDto: UpdateAppleDto): void {
    console.log(`This action updates a #${id} apple`);
    return this.collection.update({ id, ...updateAppleDto });
  }

  remove(id: string): void {
    console.log(`This action removes a #${id} apple`);
    return this.collection.delete(id);
  }
}
