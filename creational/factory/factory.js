const FormFactory = (type, attributes) => {
  const FormContact = (fields) => {
    return {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      message: fields.message
    };
  };

  const FormRegister = (fields) => {
    return {
      firstName: fields.firstName,
      lastName: fields.lastName,
      address: fields.address,
      phone: fields.phone,
      email: fields.email
    };
  };

  const formTypes = {
    contact: FormContact(attributes),
    register: FormRegister(attributes)
  };

  const FormType = () => formTypes[type];
  return FormType(attributes);
};

// EXAMPLE OF THIS BEING USED

const fields = {
  name: "Sunil",
  phone: 123456,
  email: "sunil@email.com"
};

const form = FormFactory("contact", fields);
