# bottender-compose

[![npm](https://img.shields.io/npm/v/bottender-compose.svg?style=flat-square)](https://www.npmjs.com/package/bottender-compose)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An utility library for [Bottender](github.com/Yoctol/bottender) and higher-order handlers

## Installation

```sh
npm install bottender-compose
```

## API Reference

### `series`

Create a function that executes methods in series.

```js
const { series, sendText } = require('bottender-compose');

bot.onEvent(
  series([
    sendText('1. First Item'),
    sendText('2. Second Item'),
    sendText('3. Third Item'),
  ])
);
```

### `parallel`

Create a function that executes methods in parallel.

```js
const { parallel, sendText } = require('bottender-compose');

bot.onEvent(
  parallel([
    sendText('- You got one of Items'),
    sendText('- You got one of Items'),
    sendText('- You got one of Items'),
  ])
);
```

### `random`

Create a function that executes one of method randomly.

```js
const { random, sendText } = require('bottender-compose');

bot.onEvent(
  random([
    sendText('You got a random item: A'),
    sendText('You got a random item: B'),
    sendText('You got a random item: C'),
  ])
);
```

### `branch`

Create a function that will process either the `onTrue` or the `onFalse` function depending upon the result of the condition predicate.

```js
const { branch, sendText } = require('bottender-compose');

bot.onEvent(
  branch(
    context => true,
    sendText('You are the lucky one.'),
    sendText('Too bad.')
  )
);
```

Or you can executes function on `true` and do nothing when received `false`.

```js
branch(context => true, sendText('You are the lucky one.'));
```

### `condition`

Create a function that encapsulates `if/else`, `if/else`, ... logic.

```js
const { condition, sendText } = require('bottender-compose');

bot.onEvent(
  condition([
    [context => false, sendText('a')],
    [context => false, sendText('b')],
    [context => true, sendText('c')],
  ])
);
```

### `platform`

Create a function that will process function depending upon the platform context.

```js
const {
  platform,
  sendGenericTemplate,
  sendImagemap,
} = require('bottender-compose');

bot.onEvent(platform({
  messenger: sendGenericTemplate(...),
  line: sendImagemap(...),
}));
```

Or you can use `others` key to match other platforms:

```js
platform({
  messenger: sendGenericTemplate(...),
  line: sendImagemap(...),
  others: sendText('Unsupported.'),
});
```

### `tryCatch`

Create a function that calls error handler on error.

```js
const { tryCatch, sendText } = require('bottender-compose');

bot.onEvent(
  tryCatch(doSomethingMayFail(), sendText('Error Happened~~~~~~~~~~~!'))
);
```

### `weight`

Create a function that randomly executes one of method by its weight.

```js
const { weight, sendText } = require('bottender-compose');

bot.onEvent(
  weight([
    [0.2, sendText('20%')],
    [0.4, sendText('40%')],
    [0.4, sendText('40%')],
  ])
);
```

### `doNothing`

Create a no-op function.

```js
const { branch, sendText, doNothing } = require('bottender-compose');

bot.onEvent(
  branch(
    context => false,
    sendText('You are the lucky one.'),
    doNothing() // do exactly nothing...
  )
);
```

### `repeat`

Create a function that executes the method repeatedly.

```js
const { repeat, sendText } = require('bottender-compose');

bot.onEvent(repeat(3, sendText('This will be sent 3 times.')));
```

### Other Methods

#### Common

* `setState`
* `resetState`
* `typing`

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

#### LINE

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

#### Slack

* `sendText`
* `postMessage`

#### Telegram

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

#### Viber

* `sendMessage`
* `sendText`
* `sendPicture`
* `sendVideo`
* `sendFile`
* `sendContact`
* `sendLocation`
* `sendURL`
* `sendSticker`
* `sendCarouselContent`

#### Facebook

* `sendComment`
* `sendPrivateReply`

## License

MIT © [Yoctol](https://github.com/Yoctol/bottender-compose)
