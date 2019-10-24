// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const _ = require('../_');
const match = require('../match');
const { sendText } = require('../');

it('should have correct name', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = 2;

  const Match = match(value, [[1, Haha], [2, Wow], [3, Cool]]);

  expect(Match.name).toEqual(
    'Match(SendText(haha), SendText(wow), SendText(cool))'
  );
});

it('should create an action that calls the underlying matching action', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = 2;

  const Match = match(value, [[1, Haha], [2, Wow], [3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).toBeCalledWith('wow');
});

it('should support context value function', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = context => context.state.x;

  const Match = match(value, [[1, Haha], [2, Wow], [3, Cool]]);

  const context = {
    state: { x: 2 },
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).toBeCalledWith('wow');
});

it('should support async value function', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = jest.fn().mockResolvedValue(2);

  const Match = match(value, [[1, Haha], [2, Wow], [3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).toBeCalledWith('wow');
});

it('should create an action that does nothing when no match result', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');

  const value = 3;

  const Match = match(value, [[1, Haha], [2, Wow]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).not.toBeCalled();
});

it('should create an action that calls the default action when no match result', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = 3;

  const Match = match(value, [[1, Haha], [2, Wow], [_, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).toBeCalledWith('cool');
});

it('should pass props to the underlying matching action', async () => {
  const Haha = jest.fn();
  const Wow = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });
  const Cool = jest.fn();

  const value = 2;

  const Match = match(value, [[1, Haha], [2, Wow], [3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, { name: 'John' });

  expect(context.sendText).toBeCalledWith('haha John');
});

it('should pass props to the underlying default action', async () => {
  const Haha = jest.fn();
  const Wow = jest.fn();
  const Cool = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });

  const value = 3;

  const Match = match(value, [[1, Haha], [2, Wow], [_, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, { name: 'John' });

  expect(context.sendText).toBeCalledWith('haha John');
});

it('should pass props to the value function', async () => {
  const Haha = jest.fn();
  const Wow = jest.fn();
  const Cool = jest.fn();

  const value = jest.fn(() => 3);

  const Match = match(value, [[1, Haha], [2, Wow], [_, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, { name: 'John' });

  expect(value).toBeCalledWith(context, { name: 'John' });
});

it('should create an action that runs in curried match', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const value = 3;

  const matchValue = match(value);
  const Match = matchValue([[1, Haha], [2, Wow], [_, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Match)(context, {});

  expect(context.sendText).toBeCalledWith('cool');
});
