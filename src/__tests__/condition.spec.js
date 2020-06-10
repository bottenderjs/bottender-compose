// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const condition = require('../condition');
const { sendText } = require('..');

it('should have correct name', async () => {
  const condA = () => Promise.resolve(false);
  const condB = () => Promise.resolve(true);

  const ActionA = sendText(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  const ActionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const Condition = condition([
    [condA, ActionA],
    [condB, ActionB],
  ]);

  expect(Condition.name).toEqual(
    "Condition(SendText(You've seen the...), SendText(You Shall Not P...))"
  );
});

it('should run the second function in the element when the first function resolve true', async () => {
  const condA = jest.fn(() => Promise.resolve(false));
  const condB = jest.fn(() => Promise.resolve(true));

  const ActionA = sendText(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  const ActionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const Condition = condition([
    [condA, ActionA],
    [condB, ActionB],
  ]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Condition)(context, {});

  expect(condA).toBeCalledWith(context, {});
  expect(condB).toBeCalledWith(context, {});
  expect(context.sendText).not.toBeCalledWith(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  expect(context.sendText).toBeCalledWith(
    'You Shall Not Pass - The Lord of the Rings'
  );
});

it('should pass props to the underlying action', async () => {
  const condA = jest.fn(() => true);
  const condB = jest.fn(() => false);

  const ActionA = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });
  const ActionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const Condition = condition([
    [condA, ActionA],
    [condB, ActionB],
  ]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Condition)(context, { name: 'John' });

  expect(condA).toBeCalledWith(context, { name: 'John' });
  expect(context.sendText).toBeCalledWith('haha John');
});
