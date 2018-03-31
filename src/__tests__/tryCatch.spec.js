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

it('should create action that will call error handler on error in curried tryCatch', async () => {
  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };
  const mayFailTryCatch = tryCatch(
    jest.fn().mockReturnValue(Promise.reject(new Error()))
  );
  const action = mayFailTryCatch(sendText('Error'));

  await action(context);

  expect(context.sendText).toBeCalledWith('Error');
});

it('should pass extra args to underlying action', async () => {
  const haha = jest.fn();

  const action = tryCatch(haha, sendText('Error'));

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  const extraArg = {};

  await action(context, extraArg);

  expect(haha).toBeCalledWith(context, extraArg);
});
