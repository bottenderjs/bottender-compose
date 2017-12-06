const tree = require('../tree');
const { sendText } = require('../');

it('should run different actions according to return value from first parameter', async () => {
  const intents = jest.fn(() => 'a');

  const actionA = sendText(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  const actionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const actions = tree(intents, { a: actionA, b: actionB });

  const context = {
    sendText: jest.fn(),
  };

  actions(context);

  await Promise.resolve();

  expect(intents).toHaveBeenCalled();
  expect(context.sendText.mock.calls).toContainEqual([
    "You've seen them once, you've seen them all. - Singin' in the Rain",
  ]);
  expect(context.sendText.mock.calls).not.toContainEqual([
    'You Shall Not Pass - The Lord of the Rings',
  ]);
});
