const B = require('../');

it('should export state apis', () => {
  expect(B.setState).toBeDefined();
  expect(B.resetState).toBeDefined();
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
  expect(B.associateLabel).toBeDefined();
  expect(B.dissociateLabel).toBeDefined();
  expect(B.getAssociatedLabels).toBeDefined();
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
  expect(B.getLinkedRichMenu).toBeDefined();
  expect(B.linkRichMenu).toBeDefined();
  expect(B.unlinkRichMenu).toBeDefined();
});

it('should export Slack apis', () => {
  expect(B.sendText).toBeDefined();
  expect(B.postMessage).toBeDefined();
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
  expect(B.sendLocation).toBeDefined();
  expect(B.sendVenue).toBeDefined();
  expect(B.sendContact).toBeDefined();
  expect(B.sendChatAction).toBeDefined();
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

it('should export other apis', () => {
  expect(B.random).toBeDefined();
});
