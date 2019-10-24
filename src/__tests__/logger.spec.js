/* eslint-disable no-console */
// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const parallel = require('../parallel');

let log;
let info;
let warn;
let error;
let createLogger;

beforeEach(() => {
  console.log = jest.fn();
  console.info = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();

  const logger = require('../logger');

  log = logger.log;
  info = logger.info;
  warn = logger.warn;
  error = logger.error;
  createLogger = logger.createLogger;
});

it('#log should work', async () => {
  const Log = log('print...');

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Log)(context, {});

  expect(console.log).toBeCalledWith('print...');
  expect(Log.name).toEqual('Log(print...)');
});

it('#info should work', async () => {
  const Info = info('print...');

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Info)(context, {});

  expect(console.info).toBeCalledWith('print...');
  expect(Info.name).toEqual('Info(print...)');
});

it('#warn should work', async () => {
  const Warn = warn('print...');

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Warn)(context, {});

  expect(console.warn).toBeCalledWith('print...');
  expect(Warn.name).toEqual('Warn(print...)');
});

it('#error should work', async () => {
  const Err = error('print...');

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Err)(context, {});

  expect(console.error).toBeCalledWith('print...');
  expect(Err.name).toEqual('Error(print...)');
});

it('#createLogger should work', async () => {
  const adapter = {
    log: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };
  const logger = createLogger(adapter);
  const Action = parallel([
    logger.log('log...'),
    logger.info('info...'),
    logger.warn('warn...'),
    logger.error('error...'),
  ]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(adapter.log).toBeCalledWith('log...');
  expect(adapter.info).toBeCalledWith('info...');
  expect(adapter.warn).toBeCalledWith('warn...');
  expect(adapter.error).toBeCalledWith('error...');
});

it('should support template', async () => {
  const Log = log(
    'print {{context.session.user.firstName}} {{context.session.user.lastName}}...'
  );

  const context = {
    session: {
      user: {
        firstName: 'First',
        lastName: 'Last',
      },
    },
  };

  await run(Log)(context, {});

  expect(console.log).toBeCalledWith('print First Last...');
});

it('should support template with Chinese words', async () => {
  const Log = log(
    'print {{context.session.user.姓氏}}{{context.session.user.名字}}...'
  );

  const context = {
    session: {
      user: {
        姓氏: '王',
        名字: '小明',
      },
    },
  };

  await run(Log)(context, {});

  expect(console.log).toBeCalledWith('print 王小明...');
});
