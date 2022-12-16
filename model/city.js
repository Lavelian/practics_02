const { Schema, model } = require("mongoose");

const citySchema = Schema({
  name: String,
  country: String,
  continent: String,
  population: Number,
});

const City = model("citie", citySchema);

module.exports = City;
