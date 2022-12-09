const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactsRouter = require("./contactsRouter");
require("dotenv").config();
const { DB_HOST } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);
mongoose.set("strictQuery", false);
mongoose.connect(DB_HOST, () => {
  console.log("DB start");
});
app.listen(3001, () => {
  console.log("server start");
});
