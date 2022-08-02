import { Callback, FilterQuery, ProjectionType, QueryOptions } from 'mongoose';

export interface MongoQuery<T> {
  filter?: FilterQuery<T>;
  projection?: ProjectionType<T>;
  options?: QueryOptions<T>;
  callback?: Callback<T>;
}

export type Mquery<T> = [
  filter?: FilterQuery<T>,
  projection?: ProjectionType<T>,
  options?: QueryOptions<T>,
  callback?: Callback<T>,
];
