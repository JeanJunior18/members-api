export abstract class PaginationPort<T> {
  limit: number;
  offset: number;
  total: number;
  result: T[];
}
