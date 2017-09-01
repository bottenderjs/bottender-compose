const { random, sendText } = require('../');

it('should export public apis', () => {
  expect(random).toBeDefined();
  expect(sendText).toBeDefined();
});
