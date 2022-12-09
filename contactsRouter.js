const router = require("express").Router();
const {
  getAll,
  removeContact,
  createContact,
} = require("./contactsControllers");

router.get("/", getAll);
router.post("/", createContact);
router.delete("/:id", removeContact);

module.exports = router;
