import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AskDto {
  @ApiProperty({
    isArray: true,
    type: String,
  })
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  categories: string[];
}
