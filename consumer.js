import {Kafka} from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'consumer',
});

const topic = 'test-topic';
const consumer = kafka.consumer({groupId: 'consumer'});

async function read(){
  await consumer.connect();
  await consumer.subscribe({ topic });

  await consumer.run({
    eachMessage: (payload) => {
      console.log(`Message from topic {${payload.topic}}: ${payload.message.value}`)
    }
  })
}

read();