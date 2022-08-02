import { IsNotEmpty, IsString, Max } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  @Max(10)
    name: string;

  @IsString()
  @IsNotEmpty()
  @Max(50)
    title: string;

  @IsString()
  @IsNotEmpty()
  @Max(256)
    body: string;
}
