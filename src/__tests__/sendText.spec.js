const sendText = require('../sendText');

it('should create action that will call sendText', () => {
  const action = sendText('haha');
  const context = {
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('haha');
});
