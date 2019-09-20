const platform = require('../platform');
const { sendText } = require('../');

it('should have correct name', () => {
  const messenger = sendText('messenger');
  const line = sendText('line');

  const action = platform({
    messenger,
    line,
  });

  expect(action.name).toEqual(
    `Platform(messenger: SendText(messenger), line: SendText(line))`
  );
});

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

describe('should pass extra args to underlying action', () => {
  it('on platform', () => {
    const messenger = jest.fn();
    const line = jest.fn();

    const action = platform({
      messenger,
      line,
    });

    const context = {
      platform: 'messenger',
      sendText: jest.fn(),
    };

    const extraArg = {};

    action(context, extraArg);

    expect(messenger).toBeCalledWith(context, extraArg);
  });

  it('on others', () => {
    const messenger = jest.fn();
    const line = jest.fn();
    const others = jest.fn();

    const action = platform({
      messenger,
      line,
      others,
    });

    const context = {
      platform: 'telegram',
      sendText: jest.fn(),
    };

    const extraArg = {};

    action(context, extraArg);

    expect(others).toBeCalledWith(context, extraArg);
  });
});
