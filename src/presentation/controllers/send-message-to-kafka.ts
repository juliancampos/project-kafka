import { SendMessage } from '@/domain/usecases'

export class SendMessageToKafkaController {
  constructor( private sendMessage: SendMessage) {}
  async handle (req: {body: {topic: string, messages: Array<{ value: string }>}}): Promise<any> {
    try {
      const result = this.sendMessage.sendMessage(req.body.topic, req.body.messages);
      return {
        statusCode: 200,
        data: result
      }
    } catch (error) {
      return {
        statusCode: 500,
        data: error
      } 
    }
  }
}