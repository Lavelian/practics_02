const router = require("express").Router();
const {
  getAll,
  removeContact,
  createContact,
  updateContacts,
  updateAndDeleteContacts,
} = require("./contactsControllers");

router.get("/", getAll);
router.post("/", createContact);
router.delete("/:id", removeContact);
router.put("/:id", updateContacts);
router.put("/del/:id", updateAndDeleteContacts);
module.exports = router;
