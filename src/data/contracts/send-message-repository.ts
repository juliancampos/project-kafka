import { MessageKafkaModel } from '../models/receive-message';

export interface SendMessageRepositoryContract {
  sendMessage: (topic: string, messages: Array<Messages>) => Promise<MessageKafkaModel>;
}

export type Messages = {
  value: string
} 