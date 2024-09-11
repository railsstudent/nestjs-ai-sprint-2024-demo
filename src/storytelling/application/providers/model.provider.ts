import { ChatGroq } from '@langchain/groq';
import { Inject, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GROQ_CHAT_MODEL } from '../constants/groq.constant';
import { GroqConfig } from '../types/groq-config.type';

export function InjectChatModel() {
  return Inject(GROQ_CHAT_MODEL);
}

export const GroqChatModelProvider: Provider<ChatGroq> = {
  provide: GROQ_CHAT_MODEL,
  useFactory: (configService: ConfigService) => {
    const { apiKey, model } = configService.get<GroqConfig>('groq');
    return new ChatGroq({
      apiKey,
      model,
      temperature: 0.7,
      maxTokens: 2048,
      streaming: false,
    });
  },
  inject: [ConfigService],
};
