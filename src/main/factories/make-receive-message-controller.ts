import { ReceiveMessageServiceKafka } from "@/data/services";
import { ReceiveMessageRepository } from "@/infra/repositories"
import { ReceiveMessageFromKafkaController } from "@/presentation/controllers";

export const makeReceiveMessageController = () => {
  const repository = new ReceiveMessageRepository();
  const sendMessage = new ReceiveMessageServiceKafka(repository);
  const controller = new ReceiveMessageFromKafkaController(sendMessage);

  return controller;
}