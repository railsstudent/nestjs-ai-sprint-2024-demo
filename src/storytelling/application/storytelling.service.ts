import { Injectable } from '@nestjs/common';

@Injectable()
export class StorytellingService {
  ask(categories: string[]) {
    return categories.join(',');
  }
}
