import express from "express";

const prodRouter = express.Router();

prodRouter.post('/', async (req, res) => {
  const producer = req.producer;
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      {
        value: 'Sending message through kafka'
      }
    ]
  })

  res.json({ok: true})
})

export {prodRouter};