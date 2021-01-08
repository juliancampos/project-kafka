import { MessageKafka } from '@/domain/entities/message-kafka';

export interface SendMessage {
  sendMessage: (topic: string, messages: Array<Messages>) => Promise<MessageKafka>
}

type Messages = {
  value: string
}