import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app/app.module';
import { Server } from 'http';
import { CreateAppleDto } from '../app/apples/dto/create-apple.dto';
import { cleanup } from './utils/cleanup';
import { UpdateAppleDto } from '../app/apples/dto/update-apple.dto';

describe('Test App with notarealdb', () => {
  let server: Server;
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    server = app.getHttpServer();
    await app.init();
  });

  it(`should return Hello World!`, () => {
    return request(server)
      .get('/')
      .expect(200, 'Hello World!');
  });

  it(`should return created entity's id`, () => {
    return request(server)
      .post('/apples')
      .send({
        variety: 'nest',
        price: 1000,
        weight: 1000,
      } as CreateAppleDto)
      .expect(201)
      .expect(res => {
        expect(typeof res.text).toBe('string');
        createdId = res.text;
      });
  });
  it(`should get item by Id`, () => {
    return request(server)
      .get(`/apples/${createdId}`)
      .expect(200, {
        id: createdId,
        variety: 'nest',
        price: 1000,
        weight: 1000,
      });
  });

  it(`should list items`, () => {
    return request(server)
      .get(`/apples`)
      .expect(200, [
        {
          id: createdId,
          variety: 'nest',
          price: 1000,
          weight: 1000,
        },
      ]);
  });

  it(`should update item by id`, () => {
    return request(server)
      .patch(`/apples/${createdId}`)
      .send({
        variety: 'nest2',
        price: 2000,
        weight: 2000,
      } as UpdateAppleDto)
      .expect(200, {});
  });

  it(`should get updated item by id`, () => {
    return request(server)
      .get(`/apples/${createdId}`)
      .expect(200, {
        id: createdId,
        variety: 'nest2',
        price: 2000,
        weight: 2000,
      });
  });

  it(`should delete item by id`, () => {
    return request(server)
      .delete(`/apples/${createdId}`)
      .expect(200);
  });

  afterEach(async () => {
    console.log('afterEach');
    await app.close();
  });
  afterAll(async () => {
    console.log('afterAll');
    await cleanup();
  });
});
