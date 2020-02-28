// old interface
class Interface {
  getName(firstName, lastName) {
    return console.log(`${firstName} ${lastName}`);
  }
}

// new interface
class NewInterface {
  getUserDetails(user) {
    return console.log(`${user.firstName} ${user.lastName}`);
  }
}

// adapter
class InterfaceAdapter {
  getName = (userDetails) => {
    return new NewInterface().getUserDetails(userDetails);
  };
}

const userOld = ["Sunil", "Sandhu"];

const userNew = {
  firstName: "Sunil",
  lastName: "Sandhu"
};

const interface = new Interface();
interface.getName(userOld[0], userOld[1]);

const adapter = new InterfaceAdapter();
adapter.getName(userNew);

// the InterfaceAdapter gives us a way to maintain the same method names in our code, but map them to the new interface instead.
