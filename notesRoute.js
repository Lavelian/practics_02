const router = require("express").Router();
const { getAll, createNote } = require("./noteControllers");

router.get("/", getAll);
router.post("/", createNote);

module.exports = router;
