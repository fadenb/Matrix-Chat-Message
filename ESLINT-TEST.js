const core = require('@actions/core');

const sdk = require('matrix-js-sdk');

try {
  const homeserver = core.getInput('homeserver');
  const channel = core.getInput('channel');
  const token = core.getInput('token');
  const message = core.getInput('message');
  const messagetype = core.getInput('messagetype');

  // Debug output
  core.info(`homeserver: ${homeserver}`);
  core.info(`channel: ${channel}`);
  core.info(`token: ${token}`);
  core.info(`message: ${message}`);
  core.info(`messagetype: ${messagetype}`);

  // Create client object
  const client = sdk.createClient({
    baseUrl: "https://matrix.org",
    accessToken: token
  });

  // Join channel (if we are already in the channel this does nothing)
  client.joinRoom(channel).then(() => {
    console.log('Joined channel');
  });

  // Send message
  const content = {
    msgtype: messagetype,
    body: message,
  };

  client.sendEvent(channel, 'm.room.message', content, '').then(() => {
  // message sent successfully
  }).catch((err) => {
    console.log(err);
  });
} catch (error) {
  core.setFailed(error.message);
}
