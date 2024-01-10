import express from "express";

const admRouter = express.Router();

admRouter.post('/create-topic', async (req, res) => {
  const admin = req.admin;
  try {
    await admin.createTopics({
      topics: [{
        topic: 'test-topic',
        numPartitions: 1,
        replicationFactor: 1 
      }]
    });
    console.log('Tópico criado com sucesso!');
  } catch (err) {
    console.error('Erro ao criar o tópico:', err);
  } finally {
    await admin.disconnect();
  }

  res.json({message: 'Tópico criado com sucesso'})
});

export {admRouter};