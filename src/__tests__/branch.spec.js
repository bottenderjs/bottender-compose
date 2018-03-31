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

  await flushPromises();

  expect(cond).toHaveBeenCalled();
  expect(context.sendText).toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).not.toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

it('should call third parameter function if first parameter return false, or call second parameter', async () => {
  const cond = jest.fn(() => Promise.resolve(false));

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

  await flushPromises();

  expect(cond).toHaveBeenCalled();
  expect(context.sendText).not.toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

it('should do nothing if third parameter is not provided', async () => {
  const cond = jest.fn(() => Promise.resolve(false));

  const trueAction = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );

  const br = branch(cond, trueAction);

  const context = {
    sendText: jest.fn(),
  };

  br(context);

  await flushPromises();

  expect(cond).toHaveBeenCalled();
  expect(context.sendText).not.toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
});

it('should call second parameter function if first parameter return true, or call third parameter in curried branch', async () => {
  const cond = jest.fn(() => Promise.resolve(true));

  const trueAction = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const falseAction = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const trueCondBranch = branch(cond);
  const br = trueCondBranch(trueAction, falseAction);

  const context = {
    sendText: jest.fn(),
  };

  br(context);

  await flushPromises();

  expect(cond).toHaveBeenCalled();
  expect(context.sendText).toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).not.toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

describe('should pass extra args to underlying action', () => {
  it('on true', async () => {
    const cond = jest.fn(() => true);

    const trueAction = jest.fn();

    const br = branch(cond, trueAction);

    const context = {
      sendText: jest.fn(),
    };

    const extraArg = {};

    br(context, extraArg);

    await flushPromises();

    expect(cond).toHaveBeenCalled();
    expect(trueAction).toBeCalledWith(context, extraArg);
  });

  it('on false', async () => {
    const cond = jest.fn(() => false);

    const trueAction = jest.fn();
    const falseAction = jest.fn();

    const br = branch(cond, trueAction, falseAction);

    const context = {
      sendText: jest.fn(),
    };

    const extraArg = {};

    br(context, extraArg);

    await flushPromises();

    expect(cond).toHaveBeenCalled();
    expect(falseAction).toBeCalledWith(context, extraArg);
  });
});
