module.exports = action => async context => {
  const spyContext = new Proxy(context, {
    get: (target, key) => {
      if (key === 'calls') {
        return context[key];
      }

      return (...args) => {
        target.calls.push([key, args]);
        return target[key](...args);
      };
    },
  });

  spyContext.calls = [];

  await action(spyContext);
};
