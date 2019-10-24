// FIXME: export public API for testing
const { run } = require('bottender/dist/bot/Bot');

const attachOptions = require('../attachOptions');
const { sendText } = require('../');

it('should create an action that calls sendText with the tag', async () => {
  const Action = attachOptions({ tag: 'ISSUE_RESOLUTION' }, sendText('haha'));

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(context.sendText).toBeCalledWith('haha', { tag: 'ISSUE_RESOLUTION' });
});

it('should merge original options', async () => {
  const Action = attachOptions(
    { tag: 'ISSUE_RESOLUTION' },
    sendText('haha', {
      quickReplies: [
        {
          contentType: 'text',
          title: 'Red',
          payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
        },
      ],
    })
  );

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(context.sendText).toBeCalledWith('haha', {
    quickReplies: [
      {
        contentType: 'text',
        title: 'Red',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
      },
    ],
    tag: 'ISSUE_RESOLUTION',
  });
});

it('should merge multiple attached options', async () => {
  const Action = attachOptions(
    { tag: 'ISSUE_RESOLUTION' },
    attachOptions(
      {
        quickReplies: [
          {
            contentType: 'text',
            title: 'Red',
            payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
          },
        ],
      },
      sendText('haha')
    )
  );

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(context.sendText).toBeCalledWith('haha', {
    quickReplies: [
      {
        contentType: 'text',
        title: 'Red',
        payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
      },
    ],
    tag: 'ISSUE_RESOLUTION',
  });
});

it('should create action that will run in curried attachOptions', async () => {
  const attachIssueResolutionTag = attachOptions({ tag: 'ISSUE_RESOLUTION' });
  const Action = attachIssueResolutionTag(sendText('haha'));

  const context = {
    sendText: jest.fn(() => Promise.resolve()),
  };

  await run(Action)(context, {});

  expect(context.sendText).toBeCalledWith('haha', { tag: 'ISSUE_RESOLUTION' });
});
