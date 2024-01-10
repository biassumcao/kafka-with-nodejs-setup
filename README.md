# How to run

* You need to setup a kafka server downloading kafka binaries or through docker.
* Then, you can run the app by the command `npm run app`
* You need to register a topic in kafka using the app route **/create-topic** . It will automatically create the topic *'test-topic'.*
* Then you can run the command `npm run consumer` to subscribe to the topic and wait for the messages
* And finally you can use the root route to send a test message
* You can see the messages received in the consumer console
