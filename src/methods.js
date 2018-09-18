exports.common = [
  { method: 'setState', length: 1, allowOptions: false },
  { method: 'resetState', length: 0, allowOptions: false },
  { method: 'typing', length: 1, allowOptions: false },
];

exports.messenger = [
  { method: 'sendMessage', length: 2, allowOptions: true },
  { method: 'sendText', length: 2, allowOptions: true },
  { method: 'sendAttachment', length: 2, allowOptions: true },
  { method: 'sendAudio', length: 2, allowOptions: true },
  { method: 'sendImage', length: 2, allowOptions: true },
  { method: 'sendVideo', length: 2, allowOptions: true },
  { method: 'sendFile', length: 2, allowOptions: true },
  { method: 'sendTemplate', length: 2, allowOptions: true },
  { method: 'sendButtonTemplate', length: 3, allowOptions: true },
  { method: 'sendGenericTemplate', length: 2, allowOptions: true },
  { method: 'sendListTemplate', length: 3, allowOptions: true },
  { method: 'sendOpenGraphTemplate', length: 2, allowOptions: true },
  { method: 'sendMediaTemplate', length: 2, allowOptions: true },
  { method: 'sendReceiptTemplate', length: 2, allowOptions: true },
  { method: 'sendAirlineBoardingPassTemplate', length: 2, allowOptions: true },
  { method: 'sendAirlineCheckinTemplate', length: 2, allowOptions: true },
  { method: 'sendAirlineItineraryTemplate', length: 2, allowOptions: true },
  { method: 'sendAirlineUpdateTemplate', length: 2, allowOptions: true },
  { method: 'sendAirlineFlightUpdateTemplate', length: 2, allowOptions: true }, // Todo: deprecated
  { method: 'sendSenderAction', length: 1, allowOptions: false },
  { method: 'markSeen', length: 0, allowOptions: false },
  { method: 'typingOn', length: 0, allowOptions: false },
  { method: 'typingOff', length: 0, allowOptions: false },
  { method: 'passThreadControl', length: 2, allowOptions: false },
  { method: 'passThreadControlToPageInbox', length: 1, allowOptions: false },
  { method: 'takeThreadControl', length: 1, allowOptions: false },
  { method: 'requestThreadControl', length: 1, allowOptions: false },
  { method: 'associateLabel', length: 1, allowOptions: false },
  { method: 'dissociateLabel', length: 1, allowOptions: false },
];

exports.line = [
  { method: 'sendText', length: 2, allowOptions: true },
  { method: 'sendImage', length: 2, allowOptions: true },
  { method: 'sendVideo', length: 2, allowOptions: true },
  { method: 'sendAudio', length: 2, allowOptions: true },
  { method: 'sendLocation', length: 2, allowOptions: true },
  { method: 'sendSticker', length: 2, allowOptions: true },
  { method: 'sendImagemap', length: 3, allowOptions: true },
  { method: 'sendTemplate', length: 3, allowOptions: true },
  { method: 'sendButtonTemplate', length: 3, allowOptions: true },
  { method: 'sendButtonsTemplate', length: 3, allowOptions: true }, // sendButtonTemplate alias
  { method: 'sendConfirmTemplate', length: 3, allowOptions: true },
  { method: 'sendCarouselTemplate', length: 3, allowOptions: true },
  { method: 'sendImageCarouselTemplate', length: 3, allowOptions: true },
  { method: 'reply', length: 1, allowOptions: false },
  { method: 'replyText', length: 2, allowOptions: true },
  { method: 'replyImage', length: 2, allowOptions: true },
  { method: 'replyVideo', length: 2, allowOptions: true },
  { method: 'replyAudio', length: 2, allowOptions: true },
  { method: 'replyLocation', length: 2, allowOptions: true },
  { method: 'replySticker', length: 2, allowOptions: true },
  { method: 'replyImagemap', length: 3, allowOptions: true },
  { method: 'replyTemplate', length: 3, allowOptions: true },
  { method: 'replyButtonTemplate', length: 3, allowOptions: true },
  { method: 'replyButtonsTemplate', length: 3, allowOptions: true }, // replyButtonTemplate alias
  { method: 'replyConfirmTemplate', length: 3, allowOptions: true },
  { method: 'replyCarouselTemplate', length: 3, allowOptions: true },
  { method: 'replyImageCarouselTemplate', length: 3, allowOptions: true },
  { method: 'push', length: 1, allowOptions: false },
  { method: 'pushText', length: 2, allowOptions: true },
  { method: 'pushImage', length: 2, allowOptions: true },
  { method: 'pushVideo', length: 2, allowOptions: true },
  { method: 'pushAudio', length: 2, allowOptions: true },
  { method: 'pushLocation', length: 2, allowOptions: true },
  { method: 'pushSticker', length: 2, allowOptions: true },
  { method: 'pushImagemap', length: 3, allowOptions: true },
  { method: 'pushTemplate', length: 3, allowOptions: true },
  { method: 'pushButtonTemplate', length: 3, allowOptions: true },
  { method: 'pushButtonsTemplate', length: 3, allowOptions: true }, // pushButtonTemplate alias
  { method: 'pushConfirmTemplate', length: 3, allowOptions: true },
  { method: 'pushCarouselTemplate', length: 3, allowOptions: true },
  { method: 'pushImageCarouselTemplate', length: 3, allowOptions: true },
  { method: 'linkRichMenu', length: 1, allowOptions: false },
  { method: 'unlinkRichMenu', length: 0, allowOptions: false },
  { method: 'leave', length: 0, allowOptions: false },
];

exports.slack = [
  { method: 'sendText', length: 2, allowOptions: true },
  { method: 'postMessage', length: 2, allowOptions: true },
  { method: 'postEphemeral', length: 2, allowOptions: true },
];

exports.telegram = [
  { method: 'sendText', length: 2, allowOptions: true },
  { method: 'sendMessage', length: 2, allowOptions: true },
  { method: 'sendPhoto', length: 2, allowOptions: true },
  { method: 'sendAudio', length: 2, allowOptions: true },
  { method: 'sendDocument', length: 2, allowOptions: true },
  { method: 'sendSticker', length: 2, allowOptions: true },
  { method: 'sendVideo', length: 2, allowOptions: true },
  { method: 'sendVoice', length: 2, allowOptions: true },
  { method: 'sendVideoNote', length: 2, allowOptions: true },
  { method: 'sendMediaGroup', length: 2, allowOptions: true },
  { method: 'sendLocation', length: 2, allowOptions: true },
  { method: 'sendVenue', length: 2, allowOptions: true },
  { method: 'sendContact', length: 2, allowOptions: true },
  { method: 'sendChatAction', length: 1, allowOptions: false },
  { method: 'editMessageText', length: 2, allowOptions: true },
  { method: 'editMessageCaption', length: 2, allowOptions: true },
  { method: 'editMessageReplyMarkup', length: 2, allowOptions: true },
  { method: 'deleteMessage', length: 1, allowOptions: false },
  { method: 'editMessageLiveLocation', length: 2, allowOptions: true },
  { method: 'stopMessageLiveLocation', length: 1, allowOptions: true },
  { method: 'forwardMessageFrom', length: 3, allowOptions: true },
  { method: 'forwardMessageTo', length: 3, allowOptions: true },
  { method: 'kickChatMember', length: 2, allowOptions: true },
  { method: 'unbanChatMember', length: 1, allowOptions: false },
  { method: 'restrictChatMember', length: 2, allowOptions: true },
  { method: 'promoteChatMember', length: 2, allowOptions: true },
  { method: 'exportChatInviteLink', length: 0, allowOptions: false },
  { method: 'setChatPhoto', length: 1, allowOptions: false },
  { method: 'deleteChatPhoto', length: 0, allowOptions: false },
  { method: 'setChatTitle', length: 1, allowOptions: false },
  { method: 'setChatDescription', length: 1, allowOptions: false },
  { method: 'setChatStickerSet', length: 1, allowOptions: false },
  { method: 'deleteChatStickerSet', length: 0, allowOptions: false },
  { method: 'pinChatMessage', length: 2, allowOptions: true },
  { method: 'unpinChatMessage', length: 0, allowOptions: false },
  { method: 'leaveChat', length: 0, allowOptions: false },
  { method: 'sendInvoice', length: 2, allowOptions: true },
  { method: 'answerShippingQuery', length: 2, allowOptions: true },
  { method: 'answerPreCheckoutQuery', length: 2, allowOptions: true },
  { method: 'answerInlineQuery', length: 2, allowOptions: true },
  { method: 'sendGame', length: 2, allowOptions: true },
  { method: 'setGameScore', length: 2, allowOptions: true },
];

exports.viber = [
  { method: 'sendMessage', length: 1, allowOptions: false },
  { method: 'sendText', length: 2, allowOptions: true },
  { method: 'sendPicture', length: 2, allowOptions: true },
  { method: 'sendVideo', length: 2, allowOptions: true },
  { method: 'sendFile', length: 2, allowOptions: true },
  { method: 'sendContact', length: 2, allowOptions: true },
  { method: 'sendLocation', length: 2, allowOptions: true },
  { method: 'sendURL', length: 2, allowOptions: true },
  { method: 'sendSticker', length: 2, allowOptions: true },
  { method: 'sendCarouselContent', length: 2, allowOptions: true },
];

exports.fb = [
  { method: 'sendComment', length: 1, allowOptions: false },
  { method: 'sendPrivateReply', length: 1, allowOptions: false },
  { method: 'sendLike', length: 1, allowOptions: false },
];
