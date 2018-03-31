const condition = require('../condition');
const { sendText } = require('../');

it('should run second function in the element which first function return true', async () => {
  const condA = jest.fn(() => false);
  const condB = jest.fn(() => Promise.resolve(true));

  const actionA = sendText(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  const actionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const conds = condition([[condA, actionA], [condB, actionB]]);

  const context = {
    sendText: jest.fn(),
  };

  conds(context);

  await flushPromises();

  expect(condA).toHaveBeenCalled();
  expect(context.sendText).not.toBeCalledWith(
    "You've seen them once, you've seen them all. - Singin' in the Rain"
  );
  expect(condB).toHaveBeenCalled();
  expect(context.sendText).toBeCalledWith(
    'You Shall Not Pass - The Lord of the Rings'
  );
});

it('should pass extra args to underlying action', async () => {
  const condA = jest.fn(() => true);
  const condB = jest.fn(() => false);

  const actionA = jest.fn();
  const actionB = sendText('You Shall Not Pass - The Lord of the Rings');

  const conds = condition([[condA, actionA], [condB, actionB]]);

  const context = {
    sendText: jest.fn(),
  };

  const extraArg = {};

  conds(context, extraArg);

  await flushPromises();

  expect(condA).toHaveBeenCalled();
  expect(actionA).toBeCalledWith(context, extraArg);
});
