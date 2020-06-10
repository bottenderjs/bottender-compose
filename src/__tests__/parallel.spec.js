// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const parallel = require('../parallel');
const { sendText } = require('..');

it('should have correct name', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const Parallel = parallel([Haha, Wow, Cool]);

  expect(Parallel.name).toEqual(
    'Parallel(SendText(haha), SendText(wow), SendText(cool))'
  );
});

it('should create an action that runs the actions in parallel', async () => {
  let resolveHahaPromise;
  const hahaPromise = new Promise((resolve) => {
    resolveHahaPromise = resolve;
  });
  const Haha = async (context) => {
    await context.sendText('haha');
    await hahaPromise;
  };

  let resolveWowPromise;
  const wowPromise = new Promise((resolve) => {
    resolveWowPromise = resolve;
  });
  const Wow = async (context) => {
    await context.sendText('wow');
    await wowPromise;
  };

  const Parallel = parallel([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  const promise = run(Parallel)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
  expect(context.sendText).toBeCalledWith('wow');

  resolveHahaPromise();
  resolveWowPromise();

  await promise;
});

it('should pass extra args to underlying action', async () => {
  const Haha = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });
  const Wow = jest.fn(async (context, { name }) => {
    await context.sendText(`wow ${name}`);
  });

  const Parallel = parallel([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Parallel)(context, { name: 'John' });

  expect(context.sendText).toBeCalledWith('haha John');
  expect(context.sendText).toBeCalledWith('wow John');
});

it('should support nested actions', async () => {
  const Haha = () => sendText('haha');
  const Wow = () => sendText('wow');

  const Parallel = parallel([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Parallel)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
  expect(context.sendText).toBeCalledWith('wow');
});
