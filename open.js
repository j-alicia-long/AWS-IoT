var awsIot = require('aws-iot-device-sdk');
// Config
var device = awsIot.device({
   keyPath: "./certs/e9edffb764-private.pem.key",
  certPath: "./certs/e9edffb764-certificate.pem.crt",
    caPath: "./certs/AmazonRootCA1.crt",
      host: "aj6fpr6r3v2m3-ats.iot.us-east-1.amazonaws.com"
});

// Connect
device
  .on('connect', function() {
    console.log('Connected');

// Subscribe to myTopic
    device.subscribe("myTopic");

// Publish to myTopic
    device.publish("myTopic", JSON.stringify({
      doorOpen: true
    }));
});

// Receiving a message from any topic that this device is
// subscribed to.
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });


// Error
device
  .on('error', function(error) {
    console.log('Error: ', error);
  });


