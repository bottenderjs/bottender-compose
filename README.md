# bottender-compose

> An utility library for [Bottender](github.com/Yoctol/bottender) and higher-order handlers

## Installation

```sh
npm install bottender-compose
```

## API Reference

### `series`

Create a function that executes methods in series.

```js
const { series } = require('bottender-compose');

bot.onEvent(series([
  sendText('a');
  sendText('b');
  sendText('c');
]))
```

### `parallel`

Create a function that executes methods in parallel.

```js
const { parallel } = require('bottender-compose');

bot.onEvent(parallel([
  sendText('a');
  sendText('b');
  sendText('c');
]))
```

### `random`

Create a function that executes one of method randomly.

```js
const { parallel } = require('bottender-compose');

bot.onEvent(random([
  sendText('a');
  sendText('b');
  sendText('c');
]))
```

### Other Methods

#### State

* `setState`
* `resetState`

#### Messenger

* `sendMessage`
* `sendText`
* `sendAttachment`
* `sendAudio`
* `sendImage`
* `sendVideo`
* `sendFile`
* `sendTemplate`
* `sendButtonTemplate`
* `sendGenericTemplate`
* `sendListTemplate`
* `sendOpenGraphTemplate`
* `sendMediaTemplate`
* `sendReceiptTemplate`
* `sendAirlineBoardingPassTemplate`
* `sendAirlineCheckinTemplate`
* `sendAirlineItineraryTemplate`
* `sendAirlineFlightUpdateTemplate`
* `sendSenderAction`
* `markSeen`
* `typingOn`
* `typingOff`
* `associateLabel`
* `dissociateLabel`
* `getAssociatedLabels`

## LINE

* `sendText`
* `sendImage`
* `sendVideo`
* `sendAudio`
* `sendLocation`
* `sendSticker`
* `sendImagemap`
* `sendButtonTemplate`
* `sendConfirmTemplate`
* `sendCarouselTemplate`
* `sendImageCarouselTemplate`
* `reply`
* `replyText`
* `replyImage`
* `replyVideo`
* `replyAudio`
* `replyLocation`
* `replySticker`
* `replyImagemap`
* `replyButtonTemplate`
* `replyConfirmTemplate`
* `replyCarouselTemplate`
* `replyImageCarouselTemplate`
* `sendImageCarouselTemplate`
* `push`
* `pushText`
* `pushImage`
* `pushVideo`
* `pushAudio`
* `pushLocation`
* `pushSticker`
* `pushImagemap`
* `pushButtonTemplate`
* `pushConfirmTemplate`
* `pushCarouselTemplate`
* `pushImageCarouselTemplate`
* `getLinkedRichMenu`
* `linkRichMenu`
* `unlinkRichMenu`

## Slack

* `sendText`
* `postMessage`

## Telegram

* `sendText`
* `sendMessage`
* `sendPhoto`
* `sendAudio`
* `sendDocument`
* `sendSticker`
* `sendVideo`
* `sendVoice`
* `sendVideoNote`
* `sendLocation`
* `sendVenue`
* `sendContact`
* `sendChatAction`

## License

MIT © [Yoctol](https://github.com/Yoctol/bottender-compose)
