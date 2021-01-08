import { ReceiveMessageRepositoryContract } from "@/data/contracts";
import { MessageKafkaModel } from "@/data/models/receive-message";
import { KafkaContract } from "../contracts/kafka-contract";
import { KafkaHelper } from "../helpers/kafkajs";

export class ReceiveMessageRepository implements ReceiveMessageRepositoryContract {
  private kafkaHelper: KafkaContract;

  constructor() {
    this.kafkaHelper = new KafkaHelper();
  }

  async receiveMessage (topic: string): Promise<MessageKafkaModel> {
    const result = this.kafkaHelper.receive(topic);
    return {
      title: 'teste',
      message: 'uhuu'
    }
  }
}