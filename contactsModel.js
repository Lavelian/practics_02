const { Schema, model } = require("mongoose");

const contactsSchema = Schema({
  name: String,
  phone: String,
});

const Contact = model("contact", contactsSchema);

module.exports = Contact;
