const { isValidTemplate, compileTemplate } = require('./utils');

function createLoggerAction(fn) {
  return (...args) => (context, ...otherArgs) =>
    fn(
      ...args.map(arg => {
        if (typeof arg === 'function') {
          return arg(context, ...otherArgs);
        }
        if (typeof arg === 'string' && isValidTemplate(arg)) {
          return compileTemplate(arg)(context);
        }
        return arg;
      })
    );
}

function createLogger(adapter) {
  return {
    log: createLoggerAction(adapter.log),
    info: createLoggerAction(adapter.info),
    warn: createLoggerAction(adapter.warn),
    error: createLoggerAction(adapter.error),
  };
}

const { log, info, warn, error } = createLogger(console);

exports.log = log;
exports.info = info;
exports.warn = warn;
exports.error = error;

exports.createLogger = createLogger;
