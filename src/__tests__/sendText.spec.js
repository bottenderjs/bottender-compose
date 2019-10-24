// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const { sendText } = require('../');

it('should have correct name', async () => {
  const Haha = sendText('haha');

  expect(Haha.name).toEqual('SendText(haha)');
});

it('should create action that will call sendText', async () => {
  const Haha = sendText('haha');
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Haha)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
});

it('should call function to get the text', async () => {
  const mockFn = jest.fn(() => 'haha');

  const Haha = sendText(mockFn);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Haha)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
  expect(mockFn).toBeCalledWith(context, {});
});

it('should pass props to the function', async () => {
  const mockFn = jest.fn((_, { name }) => `haha ${name}`);

  const Haha = sendText(mockFn);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Haha)(context, { name: 'John' });

  expect(mockFn).toBeCalledWith(context, { name: 'John' });
  expect(context.sendText).toBeCalledWith('haha John');
});

it('should parse template', async () => {
  const Action = sendText(
    '{{context.session.user.firstName}} {{context.session.user.lastName}}'
  );

  const context = {
    session: {
      user: {
        firstName: 'First',
        lastName: 'Last',
      },
    },
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(context.sendText).toBeCalledWith('First Last');
});
