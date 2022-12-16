const { text } = require("express");
const Contact = require("../model/contact");

const getAll = async (req, res) => {
  // await Contact.ensureIndexes({ name: "text" });
  // const result = await Contact
  //   .find()
  //   .populate("notes")
  //   .sort({ age: 1 });

  const result = await Contact.aggregate([
    {
      $match: {
        name: { $regex: "Иван" },
      },
    },
    {
      $sort: {
        age: -1,
      },
    },
  ]);
  res.send(result);
};

const getByQuery = async (req, res) => {
  const result = await Contact.find({
    // name: req.params.query,
    // $text: { $search: req.params.query },
    name: { $regex: req.params.query },
    // son: { $regex: req.params.query },
  });
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
  getByQuery,
};
