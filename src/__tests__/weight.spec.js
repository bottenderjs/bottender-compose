const weight = require('../weight');
const { sendText } = require('../');

const mathRandom = Math.random;

beforeEach(() => {
  Math.random = jest.fn();
});

afterEach(() => {
  Math.random = mathRandom;
});

it('should call first action when random is less than first weight', () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');
  const conds = [[0.5, haha], [0.2, wow], [0.3, cool]];

  Math.random.mockReturnValueOnce(0.4);
  const action = weight(conds);

  const context = {
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('haha');
});

it('should call 2nd action when random result is between first and second weight', () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');
  const conds = [[0.5, haha], [0.2, wow], [0.3, cool]];

  Math.random.mockReturnValueOnce(0.6);
  const action = weight(conds);

  const context = {
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('wow');
});

it('should call last action', () => {
  const haha = sendText('haha');
  const wow = sendText('wow');
  const cool = sendText('cool');
  const conds = [[0.5, haha], [0.2, wow], [0.3, cool]];

  Math.random.mockReturnValueOnce(0.99);
  const action = weight(conds);

  const context = {
    sendText: jest.fn(),
  };

  action(context);

  expect(context.sendText).toBeCalledWith('cool');
});
