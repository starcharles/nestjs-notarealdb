import { Injectable } from '@nestjs/common';
import { CreateAppleDto } from './dto/create-apple.dto';
import { UpdateAppleDto } from './dto/update-apple.dto';
import { Apple } from '../shared/models/apple.model';
import { InjectCollection, Collection } from '../../../src';

@Injectable()
export class ApplesService {
  constructor(@InjectCollection(Apple) private collection: Collection<Apple>) {}
  create(createAppleDto: CreateAppleDto) {
    return this.collection.create(createAppleDto);
  }

  findAll() {
    return this.collection.list();
  }

  findOne(id: string) {
    return this.collection.get(id);
  }

  update(id: string, updateAppleDto: UpdateAppleDto) {
    console.log(`This action updates a #${id} apple`);
    return this.collection.update({ id, ...updateAppleDto });
  }

  remove(id: string) {
    console.log(`This action removes a #${id} apple`);
    return this.collection.delete(id);
  }
}
