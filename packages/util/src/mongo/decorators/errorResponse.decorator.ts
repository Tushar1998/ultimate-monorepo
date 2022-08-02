import { HttpStatus } from '@nestjs/common';

export function ErrorResponse({ message }) {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {};
}
