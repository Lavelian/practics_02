const { Schema, model } = require("mongoose");

const contactsSchema = Schema({
  name: String,
  phone: String,
  notes: [{ ref: "note", type: Schema.Types.ObjectId }],
});

const Contact = model("contact", contactsSchema);

module.exports = Contact;
