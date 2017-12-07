const branch = require('../branch');
const { sendText } = require('../');

it('should call second parameter function if first parameter return true, or call third parameter', async () => {
  const cond = jest.fn(() => Promise.resolve(true));

  const trueAction = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const falseAction = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const br = branch(cond, trueAction, falseAction);

  const context = {
    sendText: jest.fn(),
  };

  br(context);

  await Promise.resolve();
  await Promise.resolve();

  expect(cond).toHaveBeenCalled();
  expect(context.sendText).toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).not.toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});
