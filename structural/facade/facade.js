function processor() {
  return {
    processString: (string) => {
      return string.substring(0, string.length / 2);
    },
    processNumber: (number) => {
      return number * number;
    },
    processBoolean: (boolean) => {
      return boolean;
    },
    processArray: (array) => {
      return array.length;
    },
    processObject: (object) => {
      return Object.keys(object).length;
    }
  };
}

class Facade {
  processThing(thing) {
    switch (Object.prototype.toString.call(thing)) {
      case "[object String]":
        return processor().processString(thing);
      case "[object Number]":
        return processor().processNumber(thing);
      case "[object Boolean]":
        return processor().processBoolean(thing);
      case "[object Array]":
        return processor().processArray(thing);
      case "[object Object]":
        return processor().processObject(thing);
      default:
        return "Unable to process thing";
    }
  }
}

// Our consumer (imaginary file whose contents is everything below this line)
// only knows how to access the Facade, but has no knowledge of its underlying infrastructure
let facade = new Facade();
console.log(facade.processThing(4));
