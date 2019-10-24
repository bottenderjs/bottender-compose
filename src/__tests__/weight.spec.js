// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const weight = require('../weight');
const { sendText } = require('../');

const mathRandom = Math.random;

beforeEach(() => {
  Math.random = jest.fn();
});

afterEach(() => {
  Math.random = mathRandom;
});

it('should have correct name', () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const Weight = weight([[0.5, Haha], [0.2, Wow], [0.3, Cool]]);

  expect(Weight.name).toEqual(
    'Weight(SendText(haha)(0.5/1), SendText(wow)(0.2/1), SendText(cool)(0.3/1))'
  );
});

it('should call the first action when the result is less than weight of the first action', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  Math.random.mockReturnValueOnce(0.4);
  const Weight = weight([[0.5, Haha], [0.2, Wow], [0.3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Weight)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
});

it('should call the 2nd action when the result is between weight of the first and second action', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  Math.random.mockReturnValueOnce(0.6);
  const Weight = weight([[0.5, Haha], [0.2, Wow], [0.3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Weight)(context, {});

  expect(context.sendText).toBeCalledWith('wow');
});

it('should call the last action', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');
  const conds = [[0.5, Haha], [0.2, Wow], [0.3, Cool]];

  Math.random.mockReturnValueOnce(0.99);
  const Weight = weight(conds);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Weight)(context, {});

  expect(context.sendText).toBeCalledWith('cool');
});

it('should pass props to the underlying action', async () => {
  const Haha = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });
  const Wow = jest.fn();
  const Cool = jest.fn();

  Math.random.mockReturnValueOnce(0.4);

  const Weight = weight([[0.5, Haha], [0.2, Wow], [0.3, Cool]]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Weight)(context, { name: 'John' });

  expect(context.sendText).toBeCalledWith('haha John');
});
