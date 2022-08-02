import { Post, PostDocument } from './schema/post.schema';
import { Model, Types } from 'mongoose';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoQuery } from '@ultimate/types';

import { CreatePostDTO } from './dto/post.dto';

export class PostService {
  private readonly logger: Logger = new Logger(PostService.name);

  constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) {}

  async create(data: CreatePostDTO): Promise<PostDocument> {
    return this.postModel.create<CreatePostDTO>({ ...data });
  }

  async find(_id: Types.ObjectId): Promise<PostDocument> {
    return this.postModel.findOne<PostDocument>({ _id });
  }

  async findAll(query?: MongoQuery<PostDocument[]>): Promise<PostDocument[]> {
    const { filter, projection, options } = query;
    return this.postModel.find<PostDocument>(filter, projection, options);
  }

  async update(id: Types.ObjectId, data: PostDocument): Promise<PostDocument> {
    return this.postModel.findByIdAndUpdate(id, data);
  }

  async delete(id: Types.ObjectId): Promise<PostDocument> {
    return this.postModel.findByIdAndDelete(id);
  }
}
