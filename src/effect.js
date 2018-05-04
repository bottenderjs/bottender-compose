const curry = require('lodash/curry');

const effect = (effectFn, action) => async (context, ...otherArgs) => {
  const { derivedState, derivedParam } = (await effectFn()) || {};

  if (derivedState) {
    context.setState(derivedState);
  }

  if (derivedParam) {
    const [param, argsFromIndex2] = otherArgs;
    if (param && typeof param === 'object') {
      return action(
        context,
        {
          ...param,
          ...derivedParam,
        },
        ...argsFromIndex2
      );
    }
  }

  return action(context, ...otherArgs);
};

module.exports = curry(effect);
