import { Kafka } from "kafkajs";
import { KafkaContract } from "@/infra/contracts/kafka-contract";

import config from './config/env';

export class KafkaHelper implements KafkaContract {
  private kafka;
  private consumer;
  private producer;

  constructor() {
    this.kafka = new Kafka({
      clientId: config.clientId,
      brokers: config.brokers
    });

    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: config.groupId, maxBytes: 1 })
  }

  async send(topic: string, messages: Array<{ value: string }>) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages
    })
    await this.producer.disconnect();
    return true;
  }

  async receive(topic: string) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning: true });
    let count = 1;
    await this.consumer.run({
      autoCommit: false,
      // eachMessage: async ({ topic, partition, message }) => {
      //   count++;
      //   console.log('======== ', count);
      //   this.consumer.pause([{ topic }])
      //   //setTimeout(() => this.consumer.resume([{ topic }]), 5000)
      //   // setTimeout(() => {
      //   //   console.log(new Date())
      //   //   console.log('Message: ', message?.value.toString())
      //   //   console.log(`Received: Topic: ${topic} - Partition: ${partition} - Message: ${ JSON.stringify(message)}`)
      //   // }, 5000)
      // }

      eachBatchAutoResolve: false,

      eachBatch: async ({ batch, resolveOffset, heartbeat, isRunning, isStale }) => {
        console.log('bbbbbbbb ', batch?.messages.length)
        for (let message of batch.messages) {
          // console.log({
          //   topic: batch.topic,
          //   partition: batch.partition,
          //   highWatermark: batch.highWatermark,
          //   message: {
          //     offset: message.offset,
          //     //key: message.key.toString(),
          //     value: message.value.toString(),
          //     //headers: message.headers,
          //   }
          // })

          resolveOffset(message.offset)
          await heartbeat();
          await this.consumer.commitOffsets([{
            topic,
            partition: batch.partition,
            offset: message.offset
          }]);
      }
    }
    })
    return true;
  }
}