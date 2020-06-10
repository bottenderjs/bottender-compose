// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const series = require('../series');
const { sendText } = require('..');

it('should have correct name', async () => {
  const Haha = sendText('haha');
  const Wow = sendText('wow');
  const Cool = sendText('cool');

  const Series = series([Haha, Wow, Cool]);

  expect(Series.name).toEqual(
    'Series(SendText(haha), SendText(wow), SendText(cool))'
  );
});

it('should create action that runs the provided actions in series', async () => {
  let resolveHahaPromise;

  const hahaPromise = new Promise((resolve) => {
    resolveHahaPromise = resolve;
  });
  const Haha = async (context) => {
    await context.sendText('haha');
    await hahaPromise;
  };

  const Wow = sendText('wow');

  const Series = series([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  const promise = run(Series)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
  expect(context.sendText).not.toBeCalledWith('wow');

  resolveHahaPromise();

  await promise;

  expect(context.sendText).toBeCalledWith('wow');
});

it('should pass props to the underlying action', async () => {
  const Haha = jest.fn(async (context, { name }) => {
    await context.sendText(`haha ${name}`);
  });
  const Wow = jest.fn(async (context, { name }) => {
    await context.sendText(`wow ${name}`);
  });

  const Series = series([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Series)(context, { name: 'John' });

  expect(context.sendText).toBeCalledWith('haha John');
  expect(context.sendText).toBeCalledWith('wow John');
});

it('should support nested actions', async () => {
  const Haha = () => sendText('haha');
  const Wow = () => sendText('wow');

  const Series = series([Haha, Wow]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Series)(context, {});

  expect(context.sendText).toBeCalledWith('haha');
  expect(context.sendText).toBeCalledWith('wow');
});
