// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');
const _delay = require('delay');

const delay = require('../delay');
const series = require('../series');
const { sendText } = require('..');

jest.mock('delay');

it('should have correct name', async () => {
  const Delay = delay(1000);

  expect(Delay.name).toEqual('Delay(1000)');
});

it('should create action that will run delay with series', async () => {
  expect.assertions(2);

  const Haha = sendText('haha');

  const Series = series([delay(1000), Haha]);

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Series)(context, {});

  expect(_delay).toBeCalledWith(1000);
  expect(context.sendText).toBeCalledWith('haha');
});
