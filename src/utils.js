const get = require('lodash/get');
const replace = require('lodash/replace');
const warning = require('warning');

const TEMPLATE_WHITELIST_KEYS = [
  'context',
  'session',
  'user',
  'event',
  'state',
  'param',
];

const contextKeyPrefixResolveMap = {
  context: '',
  session: 'session.',
  user: 'session.user.',
  event: 'event.',
  state: 'state.',
};

const JOINED_KEYS = `(${TEMPLATE_WHITELIST_KEYS.join('|')})((\\.\\w+)+)`;

exports.isValidTemplate = str => {
  const templateRegExp = new RegExp(`{{\\s*${JOINED_KEYS}\\s*}}`, 'g');

  return templateRegExp.test(str);
};

exports.compileTemplate = tpl => (context, param) => {
  let compiledResult = tpl;
  const templateRegExp = new RegExp(`{{\\s*${JOINED_KEYS}\\s*}}`, 'g');

  const matchStrings = tpl.match(templateRegExp);

  for (const matchString of matchStrings) {
    const [
      targetString,
      firstWhitelistKey,
      ...otherResults
    ] = templateRegExp.exec(matchString);

    let value;

    if (firstWhitelistKey === 'param') {
      value = get(param, otherResults[0].slice(1), '');
    } else {
      const properties = `${
        contextKeyPrefixResolveMap[firstWhitelistKey]
      }${otherResults[0].slice(1)}`;

      value = get(context, properties, '');
    }

    warning(
      typeof value === 'string',
      `Properties accessors in template is invalid -- expected return a string but got: ${typeof value}`
    );

    compiledResult = replace(compiledResult, targetString, value);

    templateRegExp.lastIndex = 0;
  }

  return compiledResult;
};
