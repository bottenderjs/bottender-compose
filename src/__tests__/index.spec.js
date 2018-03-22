const B = require('../');

it('should export common apis', () => {
  expect(B.setState).toBeDefined();
  expect(B.resetState).toBeDefined();
  expect(B.typing).toBeDefined();
});

it('should export Messenger apis', () => {
  expect(B.sendMessage).toBeDefined();
  expect(B.sendText).toBeDefined();
  expect(B.sendAttachment).toBeDefined();
  expect(B.sendAudio).toBeDefined();
  expect(B.sendImage).toBeDefined();
  expect(B.sendVideo).toBeDefined();
  expect(B.sendFile).toBeDefined();
  expect(B.sendTemplate).toBeDefined();
  expect(B.sendButtonTemplate).toBeDefined();
  expect(B.sendGenericTemplate).toBeDefined();
  expect(B.sendListTemplate).toBeDefined();
  expect(B.sendOpenGraphTemplate).toBeDefined();
  expect(B.sendMediaTemplate).toBeDefined();
  expect(B.sendReceiptTemplate).toBeDefined();
  expect(B.sendAirlineBoardingPassTemplate).toBeDefined();
  expect(B.sendAirlineCheckinTemplate).toBeDefined();
  expect(B.sendAirlineItineraryTemplate).toBeDefined();
  expect(B.sendAirlineFlightUpdateTemplate).toBeDefined();
  expect(B.sendSenderAction).toBeDefined();
  expect(B.markSeen).toBeDefined();
  expect(B.typingOn).toBeDefined();
  expect(B.typingOff).toBeDefined();
  expect(B.passThreadControl).toBeDefined();
  expect(B.passThreadControlToPageInbox).toBeDefined();
  expect(B.takeThreadControl).toBeDefined();
  expect(B.requestThreadControl).toBeDefined();
  expect(B.associateLabel).toBeDefined();
  expect(B.dissociateLabel).toBeDefined();
});

it('should export LINE apis', () => {
  expect(B.sendText).toBeDefined();
  expect(B.sendImage).toBeDefined();
  expect(B.sendVideo).toBeDefined();
  expect(B.sendAudio).toBeDefined();
  expect(B.sendLocation).toBeDefined();
  expect(B.sendSticker).toBeDefined();
  expect(B.sendImagemap).toBeDefined();
  expect(B.sendButtonTemplate).toBeDefined();
  expect(B.sendConfirmTemplate).toBeDefined();
  expect(B.sendCarouselTemplate).toBeDefined();
  expect(B.sendImageCarouselTemplate).toBeDefined();
  expect(B.reply).toBeDefined();
  expect(B.replyText).toBeDefined();
  expect(B.replyImage).toBeDefined();
  expect(B.replyVideo).toBeDefined();
  expect(B.replyAudio).toBeDefined();
  expect(B.replyLocation).toBeDefined();
  expect(B.replySticker).toBeDefined();
  expect(B.replyImagemap).toBeDefined();
  expect(B.replyButtonTemplate).toBeDefined();
  expect(B.replyConfirmTemplate).toBeDefined();
  expect(B.replyCarouselTemplate).toBeDefined();
  expect(B.replyImageCarouselTemplate).toBeDefined();
  expect(B.push).toBeDefined();
  expect(B.pushText).toBeDefined();
  expect(B.pushImage).toBeDefined();
  expect(B.pushVideo).toBeDefined();
  expect(B.pushAudio).toBeDefined();
  expect(B.pushLocation).toBeDefined();
  expect(B.pushSticker).toBeDefined();
  expect(B.pushImagemap).toBeDefined();
  expect(B.pushButtonTemplate).toBeDefined();
  expect(B.pushConfirmTemplate).toBeDefined();
  expect(B.pushCarouselTemplate).toBeDefined();
  expect(B.pushImageCarouselTemplate).toBeDefined();
  expect(B.linkRichMenu).toBeDefined();
  expect(B.unlinkRichMenu).toBeDefined();
});

it('should export Slack apis', () => {
  expect(B.sendText).toBeDefined();
  expect(B.postMessage).toBeDefined();
  expect(B.postEphemeral).toBeDefined();
});

it('should export Telegram apis', () => {
  expect(B.sendText).toBeDefined();
  expect(B.sendMessage).toBeDefined();
  expect(B.sendPhoto).toBeDefined();
  expect(B.sendAudio).toBeDefined();
  expect(B.sendDocument).toBeDefined();
  expect(B.sendSticker).toBeDefined();
  expect(B.sendVideo).toBeDefined();
  expect(B.sendVoice).toBeDefined();
  expect(B.sendVideoNote).toBeDefined();
  expect(B.sendMediaGroup).toBeDefined();
  expect(B.sendLocation).toBeDefined();
  expect(B.sendVenue).toBeDefined();
  expect(B.sendContact).toBeDefined();
  expect(B.sendChatAction).toBeDefined();
  expect(B.editMessageText).toBeDefined();
  expect(B.editMessageCaption).toBeDefined();
  expect(B.editMessageReplyMarkup).toBeDefined();
  expect(B.deleteMessage).toBeDefined();
  expect(B.editMessageLiveLocation).toBeDefined();
  expect(B.stopMessageLiveLocation).toBeDefined();
  expect(B.forwardMessageFrom).toBeDefined();
  expect(B.forwardMessageTo).toBeDefined();
  expect(B.kickChatMember).toBeDefined();
  expect(B.unbanChatMember).toBeDefined();
  expect(B.restrictChatMember).toBeDefined();
  expect(B.promoteChatMember).toBeDefined();
  expect(B.exportChatInviteLink).toBeDefined();
  expect(B.setChatPhoto).toBeDefined();
  expect(B.deleteChatPhoto).toBeDefined();
  expect(B.setChatTitle).toBeDefined();
  expect(B.setChatDescription).toBeDefined();
  expect(B.setChatStickerSet).toBeDefined();
  expect(B.deleteChatStickerSet).toBeDefined();
  expect(B.pinChatMessage).toBeDefined();
  expect(B.unpinChatMessage).toBeDefined();
  expect(B.leaveChat).toBeDefined();
  expect(B.sendInvoice).toBeDefined();
  expect(B.answerShippingQuery).toBeDefined();
  expect(B.answerPreCheckoutQuery).toBeDefined();
  expect(B.answerInlineQuery).toBeDefined();
  expect(B.sendGame).toBeDefined();
  expect(B.setGameScore).toBeDefined();
});

it('should export Viber apis', () => {
  expect(B.sendMessage).toBeDefined();
  expect(B.sendText).toBeDefined();
  expect(B.sendPicture).toBeDefined();
  expect(B.sendVideo).toBeDefined();
  expect(B.sendFile).toBeDefined();
  expect(B.sendContact).toBeDefined();
  expect(B.sendLocation).toBeDefined();
  expect(B.sendURL).toBeDefined();
  expect(B.sendSticker).toBeDefined();
  expect(B.sendCarouselContent).toBeDefined();
});

it('should export FB apis', () => {
  expect(B.sendComment).toBeDefined();
  expect(B.sendPrivateReply).toBeDefined();
});

it('should export other apis', () => {
  expect(B.branch).toBeDefined();
  expect(B.condition).toBeDefined();
  expect(B.parallel).toBeDefined();
  expect(B.platform).toBeDefined();
  expect(B.random).toBeDefined();
  expect(B.series).toBeDefined();
  expect(B.tryCatch).toBeDefined();
  expect(B.weight).toBeDefined();
  expect(B.doNothing).toBeDefined();
  expect(B.repeat).toBeDefined();
  expect(B.delay).toBeDefined();
});
