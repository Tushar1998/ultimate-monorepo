import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostController } from './rest/post.controller';
import { PostSchema, Post } from './schema/post.schema';

@Module({
  imports    : [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostController],
  providers  : [PostService],
})
export class PostModule {}
