const { Contact } = require("../model");

const getAll = async (req, res) => {
  const result = await Contact.find().populate("notes");

  res.send(result);
};
const createContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.send(result);
};
const removeContact = async (req, res) => {
  const result = await Contact.findByIdAndDelete(
    req.params.id
  );
  res.send(result);
};

module.exports = {
  getAll,
  createContact,
  removeContact,
};
