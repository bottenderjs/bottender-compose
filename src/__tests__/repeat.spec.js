const repeat = require('../repeat');
const { sendText } = require('../');

it('should create action that will run in repeat', async () => {
  const cool = sendText('cool');

  const action = repeat(5, cool);

  const context = {
    sendText: jest.fn(),
  };

  await action(context);

  expect(context.sendText.mock.calls.length).toBe(5);
});
