class Observers {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observerToRemove) {
    this.observers = this.observers.filter((observer) => observer !== observerToRemove);
  }

  get() {
    return this.observers;
  }
}

class Subject {
  constructor(items) {
    this.observers = new Observers();
    this.collection = items || [];
  }

  observe(observer) {
    this.observers.add(observer);
  }

  unObserve(observer) {
    this.observers.remove(observer);
  }

  notify(event, data) {
    this.observers.get().forEach((observer) => observer.notify(event, data));
  }

  add(item) {
    this.collection.push(item);
    this.notify("added", item);
  }

  remove(itemToRemove) {
    this.collection = this.collection.filter((item) => {
      if (item !== itemToRemove) {
        return true;
      }
      this.notify("removed", item);
      return false;
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  notify(event, data) {
    console.log(`The event was "${event}", the data was`, data, `and I am ${this.name}`);
  }
}

let subject = new Subject();
let observer = new Observer("observer1");
let otherObserver = new Observer("observer2");

subject.observe(observer);
subject.observe(otherObserver);

let data1 = {
  prop: "something"
};

let data2 = {
  prop: "something else"
};
subject.add(data1);
subject.add(data2);

subject.unObserve(otherObserver);
subject.remove(data1);
