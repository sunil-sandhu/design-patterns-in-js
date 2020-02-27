class Colleague {
  constructor(id, mediator) {
    this.id = id;
    this.mediator = mediator;
  }

  receiveMessage(message) {
    console.log("Module", this.id, "received message", message);
    return true;
  }

  sendMessage(message, recipientId) {
    if (recipientId) {
      this.mediator.send(recipientId, message);
    } else {
      this.mediator.broadcast(message, this);
    }
  }
}

function createColleague(id, mediator) {
  const colleague = new Colleague(id, mediator);
  mediator.register(colleague);
  return colleague;
}

class Mediator {
  constructor() {
    this.colleagues = [];
  }

  register(colleague) {
    this.colleagues.push(colleague);
  }

  send(recipientId, message) {
    this.colleagues.some((colleague) => {
      if (colleague.id === recipientId) {
        return colleague.receiveMessage(message);
      }
    });
  }

  broadcast(message, sender) {
    this.colleagues.forEach((colleague) => {
      if (colleague.id !== sender.id) {
        colleague.receiveMessage(message);
      }
    });
  }
}

const mediator = new Mediator();
const colleague1 = createColleague("colleague1", mediator);
const colleague2 = createColleague("colleague2", mediator);
const colleague3 = createColleague("colleague3", mediator);

colleague1.sendMessage("hey there", "colleague2");
colleague2.sendMessage("hi back!", "colleague1");
colleague3.sendMessage("hi everyone!");
