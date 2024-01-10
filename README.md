# How to run

* You need to set up a Kafka server by either downloading Kafka binaries or using Docker.
* Then, you can run the app using the command `npm run app`
* To register a topic in Kafka, utilize the app's route **/create-topic** . This action will automatically create the topic *'test-topic'.*
* Then you can run the command `npm run consumer` to subscribe to the topic and wait for the messages
* Finally, utilize the root route to send a test message. You can view the received messages in the consumer console.
