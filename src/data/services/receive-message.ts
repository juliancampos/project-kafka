import { MessageKafka } from "@/domain/entities";
import { ReceiveMessage } from "@/domain/usecases";
import { ReceiveMessageRepositoryContract } from "../contracts/receive-message-repository";

export class ReceiveMessageServiceKafka implements ReceiveMessage {
  constructor(private readonly receiveMessageRepository: ReceiveMessageRepositoryContract) {}

  receiveMessage (topic: string): Promise<MessageKafka> {
    return this.receiveMessageRepository.receiveMessage(topic);
  } 
}