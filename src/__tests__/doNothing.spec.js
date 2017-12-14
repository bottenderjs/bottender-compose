const noop = require('noop2');

const doNothing = require('../doNothing');

jest.mock('noop2');

it('should return noop', async () => {
  const action = doNothing();

  const context = {};

  await action(context);

  expect(noop).toBeCalled();
});
