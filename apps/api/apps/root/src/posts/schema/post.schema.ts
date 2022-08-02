import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ type: String, default: 'name', required: true })
    name: string;

  @Prop({ type: String, default: 'title' })
    title: string;

  @Prop({ type: String, default: 'body' })
    body: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.index({ name: 1 });
