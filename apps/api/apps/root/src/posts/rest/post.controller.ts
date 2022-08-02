import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { ParseUrlQuery } from '@ultimate/util';
import { MongoQuery } from '@ultimate/types';

import { CreatePostDTO } from '../dto/post.dto';
import { PostService } from '../post.service';
import { PostDocument } from '../schema/post.schema';

@ApiTags('Posts')
@ApiBearerAuth('oauth2')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() post: CreatePostDTO): Promise<PostDocument> {
    return this.postService.create(post);
  }

  @Get()
  findAll(@Query(new ParseUrlQuery()) query: MongoQuery<PostDocument[]>): Promise<PostDocument[]> {
    console.log('->', query);
    return this.postService.findAll(query);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String, required: true })
  find(@Param('id') id: Types.ObjectId) {
    return this.postService.find(id);
  }
}
