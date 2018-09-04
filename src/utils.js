const get = require('lodash/get');
const replace = require('lodash/replace');
const warning = require('warning');

const TEMPLATE_WHITELIST_KEYS = [
  'context',
  'session',
  'user',
  'event',
  'state',
];

const contextKeyPrefixResolveMap = {
  context: '',
  session: 'session.',
  user: 'session.user.',
  event: 'event.',
  state: 'state.',
};

function getOtherKeys(otherArg) {
  return otherArg && typeof otherArg === 'object' ? Object.keys(otherArg) : [];
}

function createTemplateRegExp(otherArg = {}) {
  const otherKeys = getOtherKeys(otherArg);
  const variables = `(${TEMPLATE_WHITELIST_KEYS.join('|')})((\\.\\w+)+)`;

  return new RegExp(
    `{{\\s*${
      otherKeys.length > 0 ? `(${otherKeys.join('|')})|` : ''
    }${variables}\\s*}}`,
    'g'
  );
}

exports.isValidTemplate = (str, otherArg) => {
  const templateRegExp = createTemplateRegExp(otherArg);

  return templateRegExp.test(str);
};

exports.compileTemplate = tpl => (context, otherArg = {}) => {
  let compiledResult = tpl;
  const templateRegExp = createTemplateRegExp(otherArg);

  const matchStrings = tpl.match(templateRegExp);

  const otherKeys = getOtherKeys(otherArg);

  for (const matchString of matchStrings) {
    const [
      targetString,
      firstWhitelistKey,
      ...otherResults
    ] = templateRegExp.exec(matchString);

    let value;
    if (otherKeys.includes(firstWhitelistKey)) {
      value = otherArg[firstWhitelistKey];
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
