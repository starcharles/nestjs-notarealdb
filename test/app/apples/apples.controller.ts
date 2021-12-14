import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
} from '@nestjs/common';
import { ApplesService } from './apples.service';
import { CreateAppleDto } from './dto/create-apple.dto';
import { UpdateAppleDto } from './dto/update-apple.dto';
import { Apple } from '../shared/models/apple.model';

@Controller('apples')
export class ApplesController {
  constructor(private readonly applesService: ApplesService) {}

  @Post()
  create(@Body() createAppleDto: CreateAppleDto): string {
    return this.applesService.create(createAppleDto);
  }

  @Get()
  findAll(): Apple[] {
    return this.applesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Apple {
    return this.applesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppleDto: UpdateAppleDto,
  ): void {
    return this.applesService.update(id, updateAppleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.applesService.remove(id);
  }
}
