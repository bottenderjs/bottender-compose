jest.mock('delay');
const _delay = require('delay');

const delay = require('../delay');
const series = require('../series');
const { sendText } = require('../');

it('should create action that will run delay with series', async () => {
  expect.assertions(2);

  const haha = sendText('haha');
  const wow = sendText('wow');

  const action = series([haha, delay(1000), wow]);

  const context = {
    sendText: jest.fn(),
  };

  const p = action(context).then(() => {
    expect(_delay).toBeCalled();
    expect(context.sendText.mock.calls).toEqual([['haha'], ['wow']]);
  });

  return p;
});
