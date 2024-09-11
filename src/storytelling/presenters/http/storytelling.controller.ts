import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AskDto } from '../dtos/ask.dto';
import { StorytellingService } from '~storytelling/application/storytelling.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Storytelling')
@Controller('storytelling')
export class StorytellingController {
  constructor(private service: StorytellingService) {}

  @ApiBody({
    description: 'An intance of AskDto',
    required: true,
    schema: {
      type: 'object',
      properties: {
        categories: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: 'categories of a selected image',
        },
      },
    },
    examples: {
      story: {
        value: {
          categories: ['duck', 'fish'],
        },
      },
    },
  })
  @ApiResponse({
    description: 'Use Groq chat model to generate a story',
    type: String,
    status: HttpStatus.CREATED,
  })
  @Post()
  ask(@Body() dto: AskDto): string {
    return this.service.ask(dto.categories);
  }
}
