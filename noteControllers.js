const Note = require("./noteModel");

const getAll = async (req, res) => {
  const result = await Note.find().populate("contact");
  res.send(result);
};

const createNote = async (req, res) => {
  const result = await Note.create(req.body);
  res.send(result);
};

module.exports = {
  getAll,
  createNote,
};
