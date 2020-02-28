class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.parent = null;
  }
  addChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  traverseUp() {
    if (this.parent) {
      console.log(`${this.name} is the child of ${this.parent.name}`);
      this.parent.traverseUp();
    } else {
      console.log(`${this.name} is the root node`);
    }
  }

  traverseDown() {
    if (this.children.length) {
      this.children.forEach((child) => {
        console.log(`${this.name} is the parent of ${child.name}`);
      });
    } else {
      console.log(`${this.name} is a leaf node`);
    }
  }
}

const root = new Person("Sunil");
const child1 = new Person("Jimmy");
const child2 = new Person("Lucy");
const child3 = new Person("Wendy");

root.addChild(child1);
root.addChild(child2);
child2.addChild(child3);

root.traverseDown();
child2.traverseDown();
child2.traverseUp();
