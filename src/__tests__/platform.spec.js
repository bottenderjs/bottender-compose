// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const platform = require('../platform');
const { sendText } = require('..');

it('should have correct name', () => {
  const Messenger = sendText('messenger');
  const Line = sendText('line');

  const Platform = platform({
    messenger: Messenger,
    line: Line,
  });

  expect(Platform.name).toEqual(
    `Platform(messenger: SendText(messenger), line: SendText(line))`
  );
});

it('should create action that will call sendText with messenger when messenger', async () => {
  const Messenger = sendText('messenger');
  const Line = sendText('line');

  const Platform = platform({
    messenger: Messenger,
    line: Line,
  });

  const context = {
    platform: 'messenger',
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Platform)(context, {});

  expect(context.sendText).toBeCalledWith('messenger');
});

it('should create an action that calls sendText with others when receiving telegram contexts', async () => {
  const Messenger = sendText('messenger');
  const Line = sendText('line');
  const Others = sendText('others');

  const Platform = platform({
    messenger: Messenger,
    line: Line,
    others: Others,
  });

  const context = {
    platform: 'telegram',
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Platform)(context, {});

  expect(context.sendText).toBeCalledWith('others');
});

describe('should pass props to the underlying action', () => {
  it('on platform', async () => {
    const Messenger = jest.fn(async (context, { name }) => {
      await context.sendText(`haha ${name}`);
    });
    const Line = jest.fn();

    const Platform = platform({
      messenger: Messenger,
      line: Line,
    });

    const context = {
      platform: 'messenger',
      sendText: jest.fn(() => Promise.resolve()),
    };

    await run(Platform)(context, { name: 'John' });

    expect(context.sendText).toBeCalledWith('haha John');
  });

  it('on others', async () => {
    const Messenger = sendText('messenger');
    const Line = sendText('line');
    const Others = jest.fn(async (context, { name }) => {
      await context.sendText(`haha ${name}`);
    });

    const Platform = platform({
      messenger: Messenger,
      line: Line,
      others: Others,
    });

    const context = {
      platform: 'telegram',
      sendText: jest.fn(() => Promise.resolve()),
    };

    await run(Platform)(context, { name: 'John' });

    expect(context.sendText).toBeCalledWith('haha John');
  });
});
