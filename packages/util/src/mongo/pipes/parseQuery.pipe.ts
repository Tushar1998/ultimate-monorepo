import { Injectable, PipeTransform, Logger, UnprocessableEntityException } from '@nestjs/common';
import { UrlQuery, MongoQuery } from '@ultimate/types';

const emptyQuery: MongoQuery<any> = {
  filter    : {},
  projection: {},
  options   : {},
};

@Injectable()
export class ParseUrlQuery<T> implements PipeTransform<UrlQuery, MongoQuery<T>> {
  private logger = new Logger(ParseUrlQuery.name);

  transform(rawQuery: UrlQuery): MongoQuery<T> {
    return Object.keys(rawQuery).reduce((prev: MongoQuery<T>, next: string) => {
      try {
        prev[next] = JSON.parse(rawQuery[next]);
      } catch (error) {
        this.logger.error(error.message);
        this.logger.verbose(error.stack);

        throw new UnprocessableEntityException(error);
      }

      return prev;
    }, emptyQuery);
  }
}
