const core = require('@actions/core');
const github = require('@actions/github');

var sdk = require("matrix-js-sdk");

try {
  const homeserver = core.getInput('homeserver');
  const channel = core.getInput('channel');
  const token = core.getInput('token');
  const message = core.getInput('message');
  const messagetype = core.getInput('messagetype');


  // Debug output
  console.log(`homeserver: ${homeserver}`);
  console.log(`channel: ${channel}`);
  console.log(`token: ${token}`);
  console.log(`message: ${message}`);
  console.log(`messagetype: ${messagetype}`);

  // Create client object
  const client = sdk.createClient({
    baseUrl: "https://matrix.org",
    accessToken: token
  });

  // Join channel (if we are already in the channel this does nothing)
  client.joinRoom(channel).then(function() {
    console.log("Joined channel");
  });

  // Send message
  const content = {
    "msgtype": messagetype,
    "body": message
  };

  client.sendEvent(channel, "m.room.message", content, "").then((res) => {
  // message sent successfully
  }).catch((err) => {
    console.log(err);
  });

} catch (error) {
  core.setFailed(error.message);
}
