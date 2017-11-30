const series = require('../series');
const sendText = require('../sendText');

it('should create action that will run in series', async () => {
  let resolveHaha;
  const haha = async context => {
    await sendText('haha')(context);
    await new Promise(resolve => {
      resolveHaha = resolve;
    });
  };

  let resolveWow;
  const wow = async context => {
    await sendText('wow')(context);
    await new Promise(resolve => {
      resolveWow = resolve;
    });
  };

  const cool = sendText('cool');

  const action = series([haha, wow, cool]);

  const context = {
    sendText: jest.fn(),
  };

  action(context);

  await Promise.resolve();

  expect(context.sendText.mock.calls).toContainEqual(['haha']);

  resolveHaha();

  await Promise.resolve();
  await Promise.resolve();

  expect(context.sendText.mock.calls).toContainEqual(['wow']);

  resolveWow();

  await Promise.resolve();
  await Promise.resolve();

  expect(context.sendText.mock.calls).toContainEqual(['cool']);
});
