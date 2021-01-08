import { MessageKafka } from '@/domain/entities/message-kafka';

export interface ReceiveMessage {
  receiveMessage: (topic: string) => Promise<MessageKafka>
}