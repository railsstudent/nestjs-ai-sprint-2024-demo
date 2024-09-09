import { Module } from '@nestjs/common';
import { GroqChatModelProvider } from './application/providers/groq-chat-model.provider';
import { StorytellingService } from './application/storytelling.service';
import { StorytellingController } from './presenters/http/storytelling.controller';

@Module({
  controllers: [StorytellingController],
  providers: [StorytellingService, GroqChatModelProvider],
})
export class StorytellingModule {}
