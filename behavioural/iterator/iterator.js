class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }
  isDone() {
    return this.index === this.collection.length;
  }
  reset() {
    this.index = 0;
    return this;
  }
  take(numberOfItems) {
    const newIndex = this.index + numberOfItems;
    const newArr = Array.prototype.slice.call(this.collection, this.index, newIndex);
    this.index = newIndex;
    return newArr;
  }
}

const createIterator = (collection) => {
  const keys = Object.keys(collection);
  let tempArray = [];
  let prop;
  if (typeof collection === "number") {
    collection = collection.toString();
  }
  if (keys.length) {
    for (prop in collection) {
      tempArray.push(collection[prop]);
    }
    collection = tempArray;
  }

  if (collection.length) {
    return new Iterator(collection);
  } else {
    throw "Iterator cannot be built from Boolean, null, or undefined";
  }
};

const testArray = [
  { something: "yay", other: 123 },
  { something: "test", other: 456 }
];
const myTestIterator = createIterator(testArray);
console.log(myTestIterator);
