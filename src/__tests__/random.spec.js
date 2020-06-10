const randomItem = require('random-item');
// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const random = require('../random');
const { sendText } = require('..');

jest.mock('random-item');

it('should have correct name', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');
  const actions = [Haha, Wow, Cool];

  const Random = random(actions);

  expect(Random.name).toEqual(
    'Random(SendText(haha), SendText(wow), SendText(cool))'
  );
});

it('should create action that will call sendText', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');
  const actions = [Haha, Wow, Cool];

  randomItem.mockReturnValueOnce(Cool);
  const Random = random([Haha, Wow, Cool]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Random)(context, {});

  expect(randomItem).toBeCalledWith(actions);
  expect(context.sendText).toBeCalledWith('cool');
});

it('should pass props to underlying action', async () => {
  const Haha = async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  };
  const Wow = jest.fn();

  const actions = [Haha, Wow];

  randomItem.mockReturnValueOnce(Haha);
  const Random = random(actions);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Random)(context, { name: 'John' });

  expect(randomItem).toBeCalledWith(actions);
  expect(context.sendText).toBeCalledWith('haha John');
});
