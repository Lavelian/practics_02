const { City } = require("../model");

const getCitys = async (req, res) => {
  const result = await City.aggregate([
    {
      $group: {
        _id: {
          continent: "$continent",
          country: "$country",
        },
        // highest_population: { $max: "$population" },
        // first_city: { $first: "$name" },
        // cities_in_top_20: { $sum: 1 },
      },
    },
    {
      $sort: {
        population: 1,
      },
    },
    {
      $match: {
        continent: "Asia",
      },
    },
  ]);
  //   const result = await City.find();
  res.send(result);
};

const createCity = async (req, res) => {
  const result = await City.create();
  res.send(result);
};

module.exports = {
  getCitys,
  createCity,
};
