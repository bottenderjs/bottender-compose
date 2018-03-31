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

it('should pass extra args to underlying action', () => {
  const haha = jest.fn();
  const wow = jest.fn();

  const actions = [haha, wow];

  randomItem.mockReturnValueOnce(haha);
  const action = random(actions);

  const context = {
    sendText: jest.fn(),
  };

  const extraArg = {};

  action(context, extraArg);

  expect(randomItem).toBeCalledWith(actions);
  expect(haha).toBeCalledWith(context, extraArg);
});
