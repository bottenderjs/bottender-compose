// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const repeat = require('../repeat');
const { sendText } = require('..');

it('should have correct name', async () => {
  const Cool = sendText('cool');

  const RepeatFiveCool = repeat(5, Cool);

  expect(RepeatFiveCool.name).toEqual('Repeat(5, SendText(cool))');
});

it('should create action that will run in repeat', async () => {
  const Cool = sendText('cool');

  const RepeatFiveCool = repeat(5, Cool);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(RepeatFiveCool)(context, {});

  expect(context.sendText).toHaveBeenNthCalledWith(1, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(2, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(3, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(4, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(5, 'cool');
});

it('should create action that will run in curried repeat', async () => {
  const Cool = sendText('cool');
  const repeatFiveTimes = repeat(5);
  const RepeatFiveCool = repeatFiveTimes(Cool);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(RepeatFiveCool)(context, {});

  expect(context.sendText).toHaveBeenNthCalledWith(1, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(2, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(3, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(4, 'cool');
  expect(context.sendText).toHaveBeenNthCalledWith(5, 'cool');
});

it('should pass props to the underlying action', async () => {
  const Haha = async (context, { name }) => {
    await context.sendText(`Haha ${name}`);
  };

  const RepeatFiveHaha = repeat(5, Haha);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(RepeatFiveHaha)(context, { name: 'John' });

  expect(context.sendText).toHaveBeenNthCalledWith(1, 'Haha John');
  expect(context.sendText).toHaveBeenNthCalledWith(2, 'Haha John');
  expect(context.sendText).toHaveBeenNthCalledWith(3, 'Haha John');
  expect(context.sendText).toHaveBeenNthCalledWith(4, 'Haha John');
  expect(context.sendText).toHaveBeenNthCalledWith(5, 'Haha John');
});

it('should support nested actions', async () => {
  const Haha = () => sendText('haha');
  const RepeatFiveHaha = repeat(5, Haha);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(RepeatFiveHaha)(context, {});

  expect(context.sendText).toHaveBeenNthCalledWith(1, 'haha');
  expect(context.sendText).toHaveBeenNthCalledWith(2, 'haha');
  expect(context.sendText).toHaveBeenNthCalledWith(3, 'haha');
  expect(context.sendText).toHaveBeenNthCalledWith(4, 'haha');
  expect(context.sendText).toHaveBeenNthCalledWith(5, 'haha');
});
