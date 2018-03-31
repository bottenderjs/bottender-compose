// eslint-disable-next-line consistent-return
module.exports = config => (context, ...otherArgs) => {
  if (config[context.platform]) {
    return config[context.platform](context, ...otherArgs);
  }

  if (config.others) {
    return config.others(context, ...otherArgs);
  }
};
