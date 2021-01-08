import { Messages, SendMessageRepositoryContract } from "@/data/contracts";
import { MessageKafkaModel } from "@/data/models/receive-message";
import { KafkaContract } from "../contracts/kafka-contract";
import { KafkaHelper } from "../helpers";

export class SendMessageRepository implements SendMessageRepositoryContract {
  private kafkaHelper: KafkaContract;

  constructor() {
    this.kafkaHelper = new KafkaHelper();
  }
  
  async sendMessage (topic: string, messages: Array<Messages>): Promise<MessageKafkaModel> {
    const result = this.kafkaHelper.send(topic, messages)
    return {
      title: 'ba',
      message: 'be'
    }
  }
}