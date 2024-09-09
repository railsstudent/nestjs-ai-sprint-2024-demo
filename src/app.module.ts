import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorytellingModule } from './storytelling/storytelling.module';

@Module({
  imports: [StorytellingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
