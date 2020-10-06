# Matrix-Chat-Message

## What does this action do?

:bulb: This action can send a message to a [Matrix](https://matrix.org/) chat room.

## Prerequisites
You will need the following to successfully setup the action
- [ ] Account on a Matrix server
- [ ] Account access token
- [ ] The internal room ID of the room where you want to send the message

### Where to Find those Things?

### Account on a Matrix Server
If you do not have a Matrix account yet or want to register a new one just for this GitHub action check out https://publiclist.anchel.nl/ for a list of public homeservers.

The username is the part between `@` and `:` in the MXID while the homeserver is the part after the `:` (in `@someone:example.org` the username is `someone` and the homserver is `example.org`).


### Matrix Access Token
To get the access token follow the following steps:

* Open a [Element web client](https://app.element.io/) (if you use that same client for anything else open it in a private window).
* Sign in with your username and password.
  * If you enter your username in the MXID format (`@username:server.tld`) it will automatically switch to the correct server.
* When prompted to `Verify this login` press `Skip` (2x times).
  * As this GitHub Action currently does not support any encryption there is no need to set it up.
* `Close` the notification that you are not receiving desktop notifications.
* Click on your username in the top left corner, a menu will open.
* Select `All settings`, Select `Help & About`, scroll down.
* Click on the `<click to reveal>` text at the bottom to unconver the access token.
* Copy the token as it is displayed.

### Internal Room ID
* Use the Element session from the access token step to join the target room
* Open the `Room settings` screen
  * You might need to click the "info" icon in the top right corner to be able to see the `Room settings` link
* Navigate to `Advanced` and copy the room id.
  * The format of the room ID is `!<random characters>:example.org`

## Usage

### Configure GitHub Secrets
* Open your GitHub repository in your browser
* Navigate to `Settings`, navigate to `Secrets`
* Create a new secret by clicking the `New secret` button
  * Name: `MATRIX_TOKEN`
  * Value: Insert the token you copied before. Make sure that there is no newline at the end.

### Setup Workflow
Define a workflow in `.github/workflows/matrix-chat-message.yml` (or add a job if you already have defined workflows).

:bulb: Read more about [Configuring a workflow](https://help.github.com/en/articles/configuring-a-workflow).

### Example Workflow File
```yaml
on: [push]

jobs:
  send-message:
    runs-on: ubuntu-latest
    name: Send message via Matrix
    steps:
    - name: Send message to test channel
      id: matrix-chat-message
      uses: fadenb/matrix-chat-message@v0.0.6
      with:
        homeserver: 'matrix.org'
        token: ${{ secrets.MATRIX_TOKEN }}
        channel: '<INSERT YOUR ROOM ID HERE>'
        message: |
          This is an *example message* using **markdown** for formatting.\
          Use a `\` character at the end of a line to cause a linebreak (the whole message is treated as markdown).\
          You can use variables like ${{ github.sha }} anywhere.

```

* Replace matrix.org with the address of your server.
* Replace `<INSERT YOUR ROOM ID HERE>` with the room ID you gathered before (it looks like `!nkJduYevFfQSxSMMMP:example.org`).
* Replace the example message with your own.

