const sendText = require('../sendText');

it('should create action that will call sendText', async () => {
  const action = sendText('haha');
  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
});
