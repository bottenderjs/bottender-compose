# 0.12.1 / 2018-09-05

- [fix] add missing export for `attachOptions`.

# 0.12.0 / 2018-09-05

- [new] add `attachOptions`:

### `attachOptions`

Attaches additional options to the action.

```js
const { attachOptions, sendText } = require('bottender-compose');

bot.onEvent(
  attachOptions({ tag: 'ISSUE_RESOLUTION' }, sendText('Issue Resolved'))
);

// curry function
const attachIssueResolutionTag = attachOptions({ tag: 'ISSUE_RESOLUTION' });

bot.onEvent(attachIssueResolutionTag(sendText('Issue Resolved')));
```

# 0.11.0 / 2018-08-27

- [new] add predicates:

### `isTextMatch`

Creates a predicate function to return true when text matches.

```js
const { isTextMatch } = require('bottender-compose');

isTextMatch('abc')(context); // boolean
isTextMatch(/abc/)(context); // boolean
```

### `isPayloadMatch`

Creates a predicate function to return true when payload matches.

```js
const { isPayloadMatch } = require('bottender-compose');

isPayloadMatch('abc')(context); // boolean
isPayloadMatch(/abc/)(context); // boolean
```

### `hasStateEqual`

Creates a predicate function to return true when state matches.

```js
const { hasStateEqual } = require('bottender-compose');

hasStateEqual('x', 1)(context); // boolean
hasStateEqual('x.y.z', 1)(context); // boolean
hasStateEqual('x', { y: { z: 1 } })(context); // boolean
```

### `not`

Creates a predicate function with **not** condition.

```js
const { not, hasStateEqual } = require('bottender-compose');

const predicate = not(hasStateEqual('x', 1));

predicate(context); // boolean
```

### `and`

Creates a predicate function with **and** condition.

```js
const { and, hasStateEqual } = require('bottender-compose');

const predicate = and([
  isTextMatch('abc'),
  hasStateEqual('x', 1))
]);

predicate(context) // boolean
```

### `or`

Creates a predicate function with **or** condition.

```js
const { or, hasStateEqual } = require('bottender-compose');

const predicate = or([
  isTextMatch('abc'),
  hasStateEqual('x', 1))
]);

predicate(context) // boolean
```

### `alwaysTrue`

Creates a predicate function that always return `true`.

```js
const { alwaysTrue } = require('bottender-compose');

const predicate = alwaysTrue();

predicate(context); // true
```

### `alwaysFalse`

Creates a predicate function that always return `false`.

```js
const { alwaysFalse } = require('bottender-compose');

const predicate = alwaysFalse();

predicate(context); // false
```

#### Messenger

- `isMessage`
- `isText`
- `hasAttachment`
- `isImage`
- `isAudio`
- `isVideo`
- `isLocation`
- `isFile`
- `isFallback`
- `isSticker`
- `isLikeSticker`
- `isQuickReply`
- `isEcho`
- `isPostback`
- `isGamePlay`
- `isOptin`
- `isPayment`
- `isCheckoutUpdate`
- `isPreCheckout`
- `isRead`
- `isDelivery`
- `isPayload`
- `isPolicyEnforcement`
- `isAppRoles`
- `isStandby`
- `isPassThreadControl`
- `isTakeThreadControl`
- `isRequestThreadControl`
- `isRequestThreadControlFromPageInbox`
- `isFromCustomerChatPlugin`
- `isReferral`
- `isBrandedCamera`

#### LINE

- `isMessage`
- `isText`
- `isImage`
- `isVideo`
- `isAudio`
- `isLocation`
- `isSticker`
- `isFollow`
- `isUnfollow`
- `isJoin`
- `isLeave`
- `isPostback`
- `isPayload`
- `isBeacon`
- `isAccountLink`

#### Slack

- `isMessage`
- `isChannelsMessage`
- `isGroupsMessage`
- `isImMessage`
- `isMpimMessage`
- `isText`
- `isInteractiveMessage`
- `isAppUninstalled`
- `isChannelArchive`
- `isChannelCreated`
- `isChannelDeleted`
- `isChannelHistoryChanged`
- `isChannelRename`
- `isChannelUnarchive`
- `isDndUpdated`
- `isDndUpdated_user`
- `isEmailDomainChanged`
- `isEmojiChanged`
- `isFileChange`
- `isFileCommentAdded`
- `isFileCommentDeleted`
- `isFileCommentEdited`
- `isFileCreated`
- `isFileDeleted`
- `isFilePublic`
- `isFileShared`
- `isFileUnshared`
- `isGridMigrationFinished`
- `isGridMigrationStarted`
- `isGroupArchive`
- `isGroupClose`
- `isGroupHistoryChanged`
- `isGroupOpen`
- `isGroupRename`
- `isGroupUnarchive`
- `isImClose`
- `isImCreated`
- `isImHistoryChanged`
- `isImOpen`
- `isLinkShared`
- `isMemberJoinedChannel`
- `isMemberLeftChannel`
- `isPinAdded`
- `isPinRemoved`
- `isReactionAdded`
- `isReactionRemoved`
- `isStarAdded`
- `isStarRemoved`
- `isSubteamCreated`
- `isSubteamMembersChanged`
- `isSubteamSelfAdded`
- `isSubteamSelfRemoved`
- `isSubteamUpdated`
- `isTeamDomainChange`
- `isTeamJoin`
- `isTeamRename`
- `isTokensRevoked`
- `isUrlVerification`
- `isUserChange`

#### Telegram

- `isMessage`
- `isText`
- `isAudio`
- `isDocument`
- `isGame`
- `isPhoto`
- `isSticker`
- `isVideo`
- `isVoice`
- `isVideoNote`
- `isContact`
- `isLocation`
- `isVenue`
- `isEditedMessage`
- `isChannelPost`
- `isEditedChannelPost`
- `isInlineQuery`
- `isChosenInlineResult`
- `isCallbackQuery`
- `isPayload`
- `isShippingQuery`
- `isPreCheckoutQuery`

#### Viber

- `isMessage`
- `isText`
- `isPicture`
- `isVideo`
- `isFile`
- `isSticker`
- `isContact`
- `isURL`
- `isLocation`
- `isSubscribed`
- `isUnsubscribed`
- `isConversationStarted`
- `isDelivered`
- `isSeen`
- `isFailed`

#### Facebook

- `isFeed`
- `isStatus`
- `isStatusAdd`
- `isStatusEdited`
- `isPost`
- `isPostRemove`
- `isComment`
- `isCommentAdd`
- `isCommentEdited`
- `isCommentRemove`
- `isLike`
- `isLikeAdd`
- `isLikeRemove`
- `isReaction`
- `isReactionAdd`
- `isReactionEdit`
- `isReactionRemove`

# 0.10.3 / 2018-08-08

- [fix] fallback to empty string when template getting falsy value

# 0.10.2 / 2018-07-25

- [new] Support user accessor: `{{user.xxx}}` in template.

# 0.10.1 / 2018-05-16

- [fix] run babel compilation before publish.

# 0.10.0 / 2018-05-16

- [new] build source with babel to have real support for node >= 7.6

# 0.9.1 / 2018-05-07

- Add new logger methods:

```js
B.series([
  B.log('sending hello'),
  B.info('sending hello'),
  B.warn('sending hello'),
  B.error('sending hello'),

  B.sendText('hello'),
]);
```

It supports template too.

```js
B.series([
  B.log('user: {{ session.user.id }} x: {{ state.x }}'),
  B.sendText('hello'),
]);
```

You can use your owner adapter for the logger:

```js
const { log, info, warn, error } = B.createLogger({
  log: debug('log'),
  info: debug('info'),
  warn: debug('warn'),
  error: debug('error'),
});

B.series([log('sending hello'), B.sendText('hello')]);
```

# 0.9.0 / 2018-05-06

- [new] `effect`:

```js
const { effect } = require('bottender-compose');

bot.onEvent(
  effect(
    // function has side effects
    async context => {
      await doSomeSideEffects();
      return {
        derivedState: {
          x: 1,
        },
        derivedParam: {
          y: 2,
        },
      };
    },

    // action
    async (context, param) => {
      console.log(context.state.x); // 1
      console.log(param.y); // 2
    }
  )
);
```

# 0.8.4 / 2018-04-26

- [new] also overwrite name in `setDisplayName`

# 0.8.3 / 2018-04-12

- [fix] pass extra args to match value function (#58)
- [fix] pass extra args to all of context fns (#59)

# 0.8.2 / 2018-04-09

- [new] Add `setDisplayName`:

Assigns to the `displayName` property on the action.

```js
const { setDisplayName, sendText } = require('bottender-compose');

setDisplayName('sayHello', sendText('hello'));

// curry function
setDisplayName('sayHello')(sendText('hello'));
```

# 0.8.1 / 2018-04-02

- [fix] warning condition on compileTemplate method.

# 0.8.0 / 2018-04-02

- [new] Use Template in String:

You can use `context`, `session`, `event`, `state` to access values in your template string:

```js
B.sendText('Hi, {{session.user.first_name}} {{session.user.last_name}}');
B.sendText('Received: {{event.text}}');
B.sendText('State: {{state.xxx}}');
```

- [new] Support `match`:

Create a function that encapsulates value matching logic.

```js
const { match, sendText } = require('bottender-compose');

bot.onEvent(
  match('a', [
    ['a', sendText('You got a A')],
    ['b', sendText('You got a B')],
    ['c', sendText('You got a C')],
  ])
);
```

It accepts function with `context` argument:

```js
bot.onEvent(
  match(context => context.state.answer, [
    ['a', sendText('You got a A')],
    ['b', sendText('You got a B')],
    ['c', sendText('You got a C')],
  ])
);

// curry function
const matchAnswer = match(context => context.state.answer);

bot.onEvent(
  matchAnswer([
    ['a', sendText('You got a A')],
    ['b', sendText('You got a B')],
    ['c', sendText('You got a C')],
  ])
);
```

To assign default action, use `_` as pattern:

```js
const { _, match, sendText } = require('bottender-compose');
bot.onEvent(
  match('a', [
    ['a', sendText('You got a A')],
    ['b', sendText('You got a B')],
    ['c', sendText('You got a C')],
    [_, sendText('You got something')],
  ])
);
```

# 0.7.0 / 2018-03-31

- [new] Curry branch, repeat and tryCatch:

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

- [new] support otherArgs:

```js
const action = (context, ...otherArgs) => {};
```

# 0.6.2 / 2018-03-22

- [new] Support new methods:

telegram:

- `editMessageText`
- `editMessageCaption`
- `editMessageReplyMarkup`
- `deleteMessage`
- `editMessageLiveLocation`
- `stopMessageLiveLocation`
- `forwardMessageFrom`
- `forwardMessageTo`

- [removed] remove useless

messenger:

- `getAssociatedLabels`

line:

- `getLinkedRichMenu`

# 0.6.1 / 2018-03-21

- [new] Support new methods:

messenger:

- `requestThreadControl`

slack:

- `postEphemeral`

telegram:

- `kickChatMember`
- `unbanChatMember`
- `restrictChatMember`
- `promoteChatMember`
- `exportChatInviteLink`
- `setChatPhoto`
- `deleteChatPhoto`
- `setChatTitle`
- `setChatDescription`
- `setChatStickerSet`
- `deleteChatStickerSet`
- `pinChatMessage`
- `unpinChatMessage`
- `leaveChat`
- `answerShippingQuery`
- `answerPreCheckoutQuery`
- `answerInlineQuery`

# 0.6.0 / 2018-03-21

- [new] Support passing function as argument to context methods:

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

- [new] Support methods:
  - `passThreadControl`
  - `passThreadControlToPageInbox`
  - `takeThreadControl`
  - `sendMediaGroup`
  - `sendInvoice`
  - `sendGame`
  - `setGameScore`

# 0.5.0 / 2017-12-20

- [new] Support `repeat` and `delay`.

# 0.4.0 / 2017-12-14

- [new] Support `weight` and `doNothing`.

# 0.3.1 / 2017-12-13

- [fix] Fix `random` runtime bug

# 0.3.0 / 2017-12-11

- [new] Support `platform` and `tryCatch`.
- [new] Export `typing`.
- [new] Export Viber, FB methods.

# 0.2.0 / 2017-12-07

- [new] Support `branch` and `condition`.

# 0.1.1 / 2017-11-30

- [fix] Export `series`, `parallel` api methods.

# 0.1.0 / 2017-11-30

- [new] Support `series`, `parallel`, `random`, and most of api methods.
