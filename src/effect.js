const curry = require('lodash/curry');
const warning = require('warning');

const effect = (effectFn, action) => async (context, ...otherArgs) => {
  const { derivedState, derivedParam, derivedProps } =
    (await effectFn(context, ...otherArgs)) || {};

  if (derivedState) {
    context.setState(derivedState);
  }

  warning(
    !derivedParam,
    '`derivedParam` is deprecated. Use `derivedProps` instead.'
  );

  if (derivedParam || derivedProps) {
    const [param, ...argsFromIndex2] = otherArgs;
    if (!param || typeof param === 'object') {
      return action(
        context,
        {
          ...param,
          ...derivedParam,
          ...derivedProps,
        },
        ...argsFromIndex2
      );
    }
  }

  return action(context, ...otherArgs);
};

module.exports = curry(effect);
