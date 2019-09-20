const doNothing = require('../doNothing');

it('should have correct name', async () => {
  const action = doNothing();

  expect(action.name).toEqual('Noop');
});
