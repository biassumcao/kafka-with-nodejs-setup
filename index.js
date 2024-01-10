import express from 'express';
import { Kafka } from 'kafkajs';
import {admRouter} from './admin.js';
import {prodRouter} from './producer.js'

const kafka = new Kafka({
  clientId: 'kafka',
  brokers: ['localhost:9092']
})

const producer = kafka.producer();
const app = express();

const admin = kafka.admin();


app.use((req, res, next) => {
  req.producer = producer;
  req.admin = admin;

  return next();
})

app.use(admRouter);
app.use(prodRouter);

app.listen(3333);