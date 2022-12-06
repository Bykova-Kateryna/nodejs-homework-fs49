const express = require("express");

const router = express.Router();

const controller = require("../../controller");

router.get("/", controller.getAllContacts);

router.get("/:contactId", controller.getOneContactById);

router.post("/", controller.addNewContact);

router.delete("/:contactId", controller.deleteContact);

router.put("/:contactId", controller.updateContactById);

module.exports = router;
