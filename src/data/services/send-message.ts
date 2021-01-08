import { MessageKafka } from "@/domain/entities";
import { SendMessage } from "@/domain/usecases";
import { Messages, SendMessageRepositoryContract } from "@/data/contracts";

export class SendMessageServiceKafka implements SendMessage {
  constructor(private readonly sendMessageRepositoy: SendMessageRepositoryContract) {}

  sendMessage (topic: string, messages: Array<Messages>): Promise<MessageKafka> {
    return this.sendMessageRepositoy.sendMessage(topic, messages);
  } 
}