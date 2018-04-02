const { sendText } = require('../');

it('should create action that will call sendText', async () => {
  const action = sendText('haha');
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
});

it('should call parameter as function', async () => {
  const mockFn = jest.fn(() => 'haha');

  const action = sendText(mockFn);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
  expect(mockFn).toBeCalled();
});

it('should parse template', async () => {
  const action = sendText(
    '{{context.session.user.first_name}} {{context.session.user.last_name}}'
  );

  const context = {
    session: {
      user: {
        first_name: 'First',
        last_name: 'Last',
      },
    },
    sendText: jest.fn(() => Promise.resolve()),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('First Last');
});
