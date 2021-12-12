import { BaseEntity } from '../../../../src';

export class Apple implements BaseEntity {
  constructor(
    public id: string,
    public variety?: string,
    public weight?: number,
    public price?: number,
  ) {}
}
