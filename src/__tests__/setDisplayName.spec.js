const setDisplayName = require('../setDisplayName');
const { sendText } = require('../');

it('should create a named action', async () => {
  const Cool = sendText('cool');

  const Action = setDisplayName('SayCool', Cool);

  expect(Action).toHaveProperty('name', 'SayCool');
  expect(Action).toHaveProperty('displayName', 'SayCool');
});

it('should create a named action using curry', async () => {
  const Cool = sendText('cool');

  const Action = setDisplayName('SayCool')(Cool);

  expect(Action).toHaveProperty('displayName', 'SayCool');
});
