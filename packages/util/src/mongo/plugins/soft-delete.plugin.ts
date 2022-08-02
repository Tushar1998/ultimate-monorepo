import { Schema, Document } from 'mongoose';

export function softDeletePlugin(schema: Schema<Document>) {
  console.log(schema);
}
