# 0.7.0 / 2018-03-31

* [new] Curry branch, repeat and tryCatch:

```js
// curry branch
const trueConditionBranch = branch(context => true);

bot.onEvent(
  trueConditionBranch(sendText('You are the lucky one.'), sendText('Too bad.'))
);

// curry repeat
const repeatFiveTimes = repeat(5);

bot.onEvent(repeatFiveTimes(sendText('This will be sent 5 times.')));

// curry tryCatch
const mayFailTryCatch = tryCatch(doSomethingMayFail());

bot.onEvent(mayFailTryCatch(sendText('Error Happened~~~~~~~~~~~!')));
```

* [new] support otherArgs:

```js
const action = (context, ...otherArgs) => {};
```

# 0.6.2 / 2018-03-22

* [new] Support new methods:

telegram:

* `editMessageText`
* `editMessageCaption`
* `editMessageReplyMarkup`
* `deleteMessage`
* `editMessageLiveLocation`
* `stopMessageLiveLocation`
* `forwardMessageFrom`
* `forwardMessageTo`

* [removed] remove useless

messenger:

* `getAssociatedLabels`

line:

* `getLinkedRichMenu`

# 0.6.1 / 2018-03-21

* [new] Support new methods:

messenger:

* `requestThreadControl`

slack:

* `postEphemeral`

telegram:

* `kickChatMember`
* `unbanChatMember`
* `restrictChatMember`
* `promoteChatMember`
* `exportChatInviteLink`
* `setChatPhoto`
* `deleteChatPhoto`
* `setChatTitle`
* `setChatDescription`
* `setChatStickerSet`
* `deleteChatStickerSet`
* `pinChatMessage`
* `unpinChatMessage`
* `leaveChat`
* `answerShippingQuery`
* `answerPreCheckoutQuery`
* `answerInlineQuery`

# 0.6.0 / 2018-03-21

* [new] Support passing function as argument to context methods:

You can pass function as argument to handle time-specified or context-specified case, for example:

```js
// Lazy execution
B.sendText(() => `Now: ${new Date()}`);

// Use user information on context
B.sendText(
  context =>
    `${context.session.user.first_name} ${
      context.session.user.last_name
    }, You are the lucky one.`
);

// Use event information
B.sendText(context => `Received: ${context.event.text}`);
```

# 0.5.1 / 2017-12-20

* [new] Support methods:
  * `passThreadControl`
  * `passThreadControlToPageInbox`
  * `takeThreadControl`
  * `sendMediaGroup`
  * `sendInvoice`
  * `sendGame`
  * `setGameScore`

# 0.5.0 / 2017-12-20

* [new] Support `repeat` and `delay`.

# 0.4.0 / 2017-12-14

* [new] Support `weight` and `doNothing`.

# 0.3.1 / 2017-12-13

* [fix] Fix `random` runtime bug

# 0.3.0 / 2017-12-11

* [new] Support `platform` and `tryCatch`.
* [new] Export `typing`.
* [new] Export Viber, FB methods.

# 0.2.0 / 2017-12-07

* [new] Support `branch` and `condition`.

# 0.1.1 / 2017-11-30

* [fix] Export `series`, `parallel` api methods.

# 0.1.0 / 2017-11-30

* [new] Support `series`, `parallel`, `random`, and most of api methods.
