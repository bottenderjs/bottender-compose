const repeat = require('../repeat');
const { sendText } = require('../');

it('should create action that will run in repeat', async () => {
  const cool = sendText('cool');

  const action = repeat(5, cool);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText.mock.calls.length).toBe(5);
});

it('should create action that will run in curried repeat', async () => {
  const cool = sendText('cool');
  const repeatFiveTimes = repeat(5);
  const action = repeatFiveTimes(cool);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText.mock.calls.length).toBe(5);
});

it('should pass extra args to underlying action', async () => {
  const cool = jest.fn();

  const action = repeat(5, cool);

  const context = {
    sendText: jest.fn(),
  };

  const extraArg = {};

  await action(context, extraArg);

  expect(cool).toBeCalledWith(context, extraArg);
});
