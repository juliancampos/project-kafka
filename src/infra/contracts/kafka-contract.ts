export interface KafkaContract {
  send: (topic: string, messages: Array<{ value: string }>) => any;
  receive: (topic: string) => any;
}