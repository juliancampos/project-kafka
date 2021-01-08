import { SendMessageServiceKafka } from "../../data/services";
import { SendMessageRepository } from "../../infra/repositories"
import { SendMessageToKafkaController } from "../../presentation/controllers";

export const makeSendMessageController = () => {
  const repository = new SendMessageRepository();
  const sendMessage = new SendMessageServiceKafka(repository);
  const controller = new SendMessageToKafkaController(sendMessage);

  return controller;
}