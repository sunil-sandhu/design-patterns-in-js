function pubSub() {
  let subscribers = {};
  return {
    publish: (topic, data) => {
      if (!subscribers[topic]) {
        return;
      }
      subscribers[topic].forEach((callback) => {
        callback(data);
      });
    },
    subscribe: (topic, callback) => {
      let index;

      if (!subscribers[topic]) {
        subscribers[topic] = [];
      }
      index = subscribers[topic].push(callback) - 1;

      return {
        dispose: () => {
          subscribers[topic].splice(index, 1);
        }
      };
    }
  };
}

const fields = {
  name: "Sunil",
  message: "Hey friend!"
};

const pubsub = pubSub();

const notifyUser = (data) => {
  console.log(`${data.name} has sent you the following message: ${data.message}`);
};

let subscription = pubsub.subscribe("notifications", (data) => {
  notifyUser(data);
  subscription.dispose();
});

pubsub.publish("notifications", fields);
