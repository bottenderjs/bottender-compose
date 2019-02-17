const effect = require('../effect');
const { sendText } = require('../');

function createContext() {
  const state = {};
  return {
    state,
    setState: newState => {
      Object.assign(state, newState);
    },
    sendText: jest.fn(),
  };
}

it('should create action that will call underlying action', async () => {
  const action = effect(() => {}, sendText('haha'));

  const context = createContext();

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
});

it('should support derivedState', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedState: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  await action(context);

  expect(haha.mock.calls[0][0]).toHaveProperty('state.x', 1);
});

it('should support derivedParam when have no otherArgs', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedParam: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  await action(context);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
});

it('should support derivedParam when have one otherArg (object)', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedParam: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = {};

  await action(context, extraArg);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
});

it('should support derivedParam when have one otherArg (non-object)', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedParam: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = 1;

  await action(context, extraArg);

  expect(haha.mock.calls[0][1]).not.toHaveProperty('x', 1);
});

it('should support derivedParam when have two otherArgs', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedParam: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = {};
  const extraArg2 = {};

  await action(context, extraArg, extraArg2);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
  expect(haha.mock.calls[0][2]).toBe(extraArg2);
});

it('should support derivedProps when have no otherArgs', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedProps: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  await action(context);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
});

it('should support derivedProps when have one otherArg (object)', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedProps: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = {};

  await action(context, extraArg);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
});

it('should support derivedProps when have one otherArg (non-object)', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedProps: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = 1;

  await action(context, extraArg);

  expect(haha.mock.calls[0][1]).not.toHaveProperty('x', 1);
});

it('should support derivedProps when have two otherArgs', async () => {
  const haha = jest.fn();

  const action = effect(
    () => ({
      derivedProps: { x: 1 },
    }),
    haha
  );

  const context = createContext();

  const extraArg = {};
  const extraArg2 = {};

  await action(context, extraArg, extraArg2);

  expect(haha.mock.calls[0][1]).toHaveProperty('x', 1);
  expect(haha.mock.calls[0][2]).toBe(extraArg2);
});

it('should pass extra args to effect fn & action', async () => {
  const haha = jest.fn();
  const doEffect = jest.fn();

  const action = effect(doEffect, haha);

  const context = createContext();

  const extraArg = {};

  await action(context, extraArg);

  expect(doEffect).toBeCalledWith(context, extraArg);
  expect(haha).toBeCalledWith(context, extraArg);
});

it('should create action that will run in curried match', async () => {
  const haha = sendText('haha');

  const wrapEffect = effect(() => {});
  const action = wrapEffect(haha);

  const context = createContext();

  await action(context);

  expect(context.sendText).toBeCalledWith('haha');
});
