import { Injectable } from '@nestjs/common';
import * as Amqp from 'amqp-ts';

@Injectable()
export class QueueDispatcher {
  private queues = {};
  private exchanges = {};
  private connection: Amqp.Connection;
  constructor() {
    this.connection = new Amqp.Connection('amqp://localhost');
  }

  sendMessage(message, queueName) {
    let queue;
    let exchange;
    if (!this.queues[queueName]) {
      queue = this.connection.declareQueue(queueName);
      exchange = this.connection.declareExchange(queueName);
      queue.bind(exchange);
      this.queues[queueName] = queue;
      this.exchanges[queueName] = exchange;
    } else {
      queue = this.queues[queueName];
      exchange = this.exchanges[queueName];
    }

    const msg: Amqp.Message = new Amqp.Message(message);
    this.connection.completeConfiguration().then(() => {
      exchange.send(msg);
    });
  }
}
