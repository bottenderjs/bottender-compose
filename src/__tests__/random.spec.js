jest.mock('random-item');

const randomItem = require('random-item');

const random = require('../random');
const { sendText } = require('../');

it('should create action that will call sendText', () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');
  const actions = [haha, wow, cool];

  randomItem.mockReturnValueOnce(cool);
  const action = random(actions);

  const context = {
    sendText: jest.fn(),
  };

  action(context);

  expect(randomItem).toBeCalledWith(actions);
  expect(context.sendText).toBeCalledWith('cool');
});
