import { ReceiveMessage } from '@/domain/usecases'

export class ReceiveMessageFromKafkaController {
  constructor( private sendMessage: ReceiveMessage) {}
  async handle (req: { query: { topic: string }}): Promise<any> {
    try {
      const result = this.sendMessage.receiveMessage(req.query.topic);
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