const { sendText } = require('../');

it('should create action that will call sendText', async () => {
  const action = sendText('haha');
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
});
