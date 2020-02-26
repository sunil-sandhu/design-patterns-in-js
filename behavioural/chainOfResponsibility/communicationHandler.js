class CommunicationHandler {
  constructor(communicationType, handler, nextHandler) {
    this.communicationType = communicationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  }

  handleCommuniation(communication) {
    if (communication.type !== this.communicationType) {
      this.nextHandler
        ? this.nextHandler.handleCommuniation(communication)
        : console.log(`Communication type: ${communication.type}, could not be handled`);
      return;
    }
    this.handler(communication);
  }
}

function handleEmail(email) {
  console.log(`Email sent to: ${email.recipient}, message: ${email.message}`);
}

function handleSMS(sms) {
  console.log(`SMS sent to: ${sms.recipient}, message: ${sms.message}`);
}

function handleCall(call) {
  console.log(`Call placed to: ${call.number}, from: ${call.ownNumber}`);
}

const emailHandler = new CommunicationHandler("email", handleEmail, null);

const textHandler = new CommunicationHandler("sms", handleSMS, emailHandler);

const callHandler = new CommunicationHandler("call", handleCall, textHandler);

const call = {
  type: "call",
  number: "07123456789",
  ownNumber: "01234123123"
};

const email = {
  type: "email",
  recipient: "hello@sunilsandhu.com",
  message: "Hi Sunil!"
};

const fax = {
  type: "fax",
  number: "0129394846",
  message: "Hi Sunil!"
};

// typically the first handler would be the one most commonly used - in this case we've opted for callHandler
const handler = new CommunicationHandler(null, null, callHandler);
handler.handleCommuniation(email);
handler.handleCommuniation(call);
// the one below will not work as we do not have a 'fax' handler
handler.handleCommuniation(fax);
