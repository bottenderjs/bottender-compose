module.exports = actions => (context, ...otherArgs) =>
  Promise.all(actions.map(action => action(context, ...otherArgs)));
