const platform = require('../platform');
const { sendText } = require('../');

it('should create action that will call sendText with messenger when messenger', () => {
  const messenger = sendText('messenger');
  const line = sendText('line');

  const action = platform({
    messenger,
    line,
  });

  const context = {
    platform: 'messenger',
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('messenger');
});

it('should create action that will call sendText with others when telegram', () => {
  const messenger = sendText('messenger');
  const line = sendText('line');
  const others = sendText('other');

  const action = platform({
    messenger,
    line,
    others,
  });

  const context = {
    platform: 'telegram',
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('other');
});
