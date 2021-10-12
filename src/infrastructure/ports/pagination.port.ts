export abstract class PaginationPort<T> {
  constructor(data: PaginationPort<T>) {
    Object.assign(this, data);
  }

  limit: number;
  offset: number;
  total: number;
  result: T[];
}
