import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGroq } from '@langchain/groq';
import { Injectable, Logger } from '@nestjs/common';
import { InjectChatModel } from './providers/model.provider';

@Injectable()
export class StorytellingService {
  private readonly logger = new Logger(StorytellingService.name);

  constructor(@InjectChatModel() private llm: ChatGroq) {}

  async ask(inputs: string[]): Promise<string> {
    const categories = inputs.join(',');
    this.logger.log(`categories: ${categories}`);

    const promptTemplate = ChatPromptTemplate.fromMessages([
      [
        'system',
        'You are a professional storyteller with vivid imagination who can tell a story about certain objects, animals, and human being',
      ],
      [
        'user',
        `Please write a story with the following categories delimited by triple dashes:
        ---{categories}---
      
        The story should be written in one paragraph, 300 words max.
        Story:
      `,
      ],
    ]);

    const chain = promptTemplate.pipe(this.llm).pipe(new StringOutputParser());
    const response = await chain.invoke({ categories });

    this.logger.log(response);

    return response;
  }
}
