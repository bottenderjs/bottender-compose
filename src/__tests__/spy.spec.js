const { spy, series, sendText } = require('../');

it('should spy all context actions', async () => {
  const cool = sendText('The things you own end up owning you. - Fight Club');
  const context = {
    sendText: jest.fn(),
  };

  const action = spy(series([cool]));

  action(context);
  await Promise.resolve();

  expect(context.calls).toHaveLength(1);
  expect(context.calls).toEqual([
    ['sendText', ['The things you own end up owning you. - Fight Club']],
  ]);
});
