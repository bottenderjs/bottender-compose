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
  const mockFn = jest.fn();
  mockFn.mockReturnValue('haha');
  const action = sendText(mockFn);
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
  expect(mockFn).toBeCalled();
});
