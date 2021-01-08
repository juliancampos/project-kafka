import { MessageKafkaModel } from '../models/receive-message';

export interface ReceiveMessageRepositoryContract {
  receiveMessage: (topic: string) => Promise<MessageKafkaModel>;
}