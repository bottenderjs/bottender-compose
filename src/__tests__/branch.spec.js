// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const branch = require('../branch');
const { sendText } = require('../');

it('should have correct name', async () => {
  const cond = () => Promise.resolve(true);

  const OnTrue = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const OnFalse = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const Branch = branch(cond, OnTrue, OnFalse);

  expect(Branch.name).toEqual(
    "Branch(SendText(Sometimes it's ...), SendText(You are the but...))"
  );
});

it('should call the second argument if the predicate function resolve true, or call the third argument', async () => {
  const cond = jest.fn(() => Promise.resolve(true));

  const OnTrue = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const OnFalse = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const Branch = branch(cond, OnTrue, OnFalse);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Branch)(context, {});

  expect(cond).toBeCalledWith(context, {});
  expect(context.sendText).toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).not.toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

it('should call the third argument if the predicate function resolve false, or call the second argument', async () => {
  const cond = jest.fn(() => Promise.resolve(false));

  const OnTrue = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const OnFalse = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const Branch = branch(cond, OnTrue, OnFalse);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Branch)(context, {});

  expect(cond).toBeCalledWith(context, {});
  expect(context.sendText).not.toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

it('should do nothing if the third argument is not provided', async () => {
  const cond = jest.fn(() => Promise.resolve(false));

  const OnTrue = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );

  const Branch = branch(cond, OnTrue);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Branch)(context, {});

  expect(context.sendText).not.toBeCalled();
});

it('should call the second argument if the predicate function resolve true, or call the third argument in curried branch', async () => {
  const cond = jest.fn(() => Promise.resolve(true));

  const OnTrue = sendText(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  const OnFalse = sendText(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );

  const trueCondBranch = branch(cond);
  const Branch = trueCondBranch(OnTrue, OnFalse);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Branch)(context, {});

  expect(cond).toBeCalledWith(context, {});
  expect(context.sendText).toBeCalledWith(
    "Sometimes it's easier livin' the lie. - Catch Me If You Can"
  );
  expect(context.sendText).not.toBeCalledWith(
    'You are the butter to my bread, and the breath to my life - Julie & Julia'
  );
});

describe('should pass props to the underlying action', () => {
  it('on true', async () => {
    const cond = jest.fn(() => true);

    const OnTrue = jest.fn(async (context, { name }) => {
      await context.sendText(`haha ${name}`);
    });

    const Branch = branch(cond, OnTrue);

    const context = {
      sendText: jest.fn(() => Promise.resolve()),
    };

    await run(Branch)(context, { name: 'John' });

    expect(cond).toBeCalledWith(context, { name: 'John' });
    expect(context.sendText).toBeCalledWith('haha John');
  });

  it('on false', async () => {
    const cond = jest.fn(() => false);

    const OnTrue = jest.fn();
    const OnFalse = jest.fn(async (context, { name }) => {
      await context.sendText(`haha ${name}`);
    });

    const Branch = branch(cond, OnTrue, OnFalse);

    const context = {
      sendText: jest.fn(() => Promise.resolve()),
    };

    await run(Branch)(context, { name: 'John' });

    expect(cond).toBeCalledWith(context, { name: 'John' });
    expect(context.sendText).toBeCalledWith('haha John');
  });
});
