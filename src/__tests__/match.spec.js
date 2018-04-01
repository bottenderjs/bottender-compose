const _ = require('../_');
const match = require('../match');
const { sendText } = require('../');

it('should create action that will call underlying matching action', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');

  const value = 2;

  const action = match(value, [[1, haha], [2, wow], [3, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('wow');
});

it('should support context value function', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');

  const value = context => context.state.x;

  const action = match(value, [[1, haha], [2, wow], [3, cool]]);

  const context = {
    state: { x: 2 },
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('wow');
});

it('should support async value function', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');

  const value = jest.fn().mockResolvedValue(2);

  const action = match(value, [[1, haha], [2, wow], [3, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('wow');
});

it('should create action that will do nothing when no match', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');

  const value = 3;

  const action = match(value, [[1, haha], [2, wow]]);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).not.toBeCalled();
});

it('should create action that will call default action when no match', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');

  const value = 3;

  const action = match(value, [[1, haha], [2, wow], [_, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('cool');
});

it('should pass extra args to underlying matched action', async () => {
  const haha = jest.fn();
  const wow = jest.fn();
  const cool = jest.fn();

  const value = 2;

  const action = match(value, [[1, haha], [2, wow], [3, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  const extraArg = {};

  await action(context, extraArg);

  expect(wow).toBeCalledWith(context, extraArg);
});

it('should pass extra args to underlying default action', async () => {
  const haha = jest.fn();
  const wow = jest.fn();
  const cool = jest.fn();

  const value = 3;

  const action = match(value, [[1, haha], [2, wow], [_, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  const extraArg = {};

  await action(context, extraArg);

  expect(cool).toBeCalledWith(context, extraArg);
});

it('should create action that will run in curried match', async () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');

  const value = 3;

  const matchValue = match(value);
  const action = matchValue([[1, haha], [2, wow], [_, cool]]);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('cool');
});
