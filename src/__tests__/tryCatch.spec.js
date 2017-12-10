const tryCatch = require('../tryCatch');
const { sendText } = require('../');

it('should create action that will call error handler on error', async () => {
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  const action = tryCatch(
    jest.fn().mockReturnValue(Promise.reject(new Error())),
    sendText('Error')
  );

  await action(context);

  expect(context.sendText).toBeCalledWith('Error');
});
