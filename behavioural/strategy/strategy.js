class Validator {
  selectValidator(validator) {
    this.validator = validator;
    return this;
  }

  validate(value) {
    if (this.validator) {
      return this.validator.validate(value);
    }
    throw "No validator selected";
  }
}

function telValidator() {
  return {
    validate: (value) => {
      return /^[0-9]{11}$/g.test(value);
    }
  };
}

function emailValidator() {
  return {
    validate: (value) => {
      return value.indexOf("@") !== -1;
    }
  };
}

const validator = new Validator();

validator.selectValidator(emailValidator());
console.log(validator.validate("hey@hi.com"));
