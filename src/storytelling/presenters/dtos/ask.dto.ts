import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AskDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  categories: string[];
}
