const router = require("express").Router();
const {
  getAll,
  removeContact,
  createContact,
  getByQuery,
} = require("../controllers");

router.get("/", getAll);
router.get("/:query", getByQuery);
router.post("/", createContact);
router.delete("/:id", removeContact);

module.exports = router;
