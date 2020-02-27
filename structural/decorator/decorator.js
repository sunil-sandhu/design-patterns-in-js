class User {
  constructor(id) {
    this.id = id;
    this.getPermissions = () => {
      return "public:read";
    };
  }

  decoratePermissions(decorator) {
    this.getPermissions = decorator.getPermissions;
  }
}

class Exec {
  getPermissions() {
    return "public:read,confidential:read";
  }
}

class Admin {
  getPermissions() {
    return "public:write,confidential:write";
  }
}

let user1 = new User("user1");
console.log(user1.getPermissions());
user1.decoratePermissions(new Exec());
console.log(user1.getPermissions());
