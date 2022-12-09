const Contact = require("./contactsModel");

const getAll = async (req, res) => {
  const result = await Contact.find().populate("notes");

  res.send(result);
};
const createContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.send(result);
};
const removeContact = async (req, res) => {
  const result = await Contact.findByIdAndDelete(req.params.id);
  res.send(result);
};
const updateContacts = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(
    req.params.id,
    { $push: { notes: req.body.notesID } },
    { new: true }
  );
  res.send(result);
};
const updateAndDeleteContacts = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(
    req.params.id,
    { $pull: { notes: req.body.notesID } },
    { new: true }
  );
  res.send(result);
};

module.exports = {
  getAll,
  createContact,
  removeContact,
  updateContacts,
  updateAndDeleteContacts,
};
