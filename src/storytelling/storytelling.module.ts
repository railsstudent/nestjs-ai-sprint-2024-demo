import { Module } from '@nestjs/common';
import { StorytellingController } from './presenters/http/storytelling.controller';
import { StorytellingService } from './application/storytelling.service';

@Module({
  controllers: [StorytellingController],
  providers: [StorytellingService],
})
export class StorytellingModule {}
